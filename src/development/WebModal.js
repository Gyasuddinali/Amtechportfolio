import React, { useEffect, useState } from 'react';

function WebModal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const modal = new window.bootstrap.Modal(
        document.getElementById('callbackModal')
      );
      modal.show();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolioback-nu.vercel.app/accontact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);

      const modalEl = document.getElementById('callbackModal');
      const modal = window.bootstrap.Modal.getInstance(modalEl);
      modal.hide();

      const successModal = new window.bootstrap.Modal(
        document.getElementById('successModal')
      );
      successModal.show();

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      {/* Callback Form Modal */}
      <div className="modal fade" id="callbackModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-dialog-scrollable">
<div className="modal-content" style={{ borderRadius: '12px', height: '100%' ,color:'#d4af37',backgroundColor:'#0b3d2e'}}>

            <div
              className="modal-header"
style={{color:'#d4af37',backgroundColor:'#0b3d2e'}}            >
              <h5 className="modal-title">🚀 Launch Your Business Website</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div
  className="modal-body"
  style={{
    backgroundColor: '#0b3d2e',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 130px)', 
  }}
>

                <p style={{ fontSize: '15px',color:'#d4af37'}}>
                  We build fast, modern, websites only 2999.
                </p>

                <div className="row">
                  <div className="col-12 mb-3">
                    <label className="form-label">👤 Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label">📧 Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                      placeholder="gyasu@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label">📞 Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      required
                      placeholder="9199245536"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label">🌐Service</label>
                    <select
                      name="service"
                      className="form-select"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="">Select a service</option>
    <option value="school">School Website</option>
    <option value="coaching">Coaching Institute</option>
    <option value="hotel">Hotel Website</option>
    <option value="restaurant">Restaurant Website</option>
    <option value="hospital">Hospital Website</option>
    <option value="tour">Tour & Travel</option>
    <option value="business">Business Website</option>
                      <option value="seo"> SEO & Digital Marketing</option>
                      <option value="design">UI/UX Design</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label">💬 Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Tell us about your project..."
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div
                  className="alert alert-info mt-3"
                  style={{ fontSize: '14px' }}
                >
                  ✅ Free consultation within 24 hours.
                  <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ fontWeight: 'bold' }}
                >
                  Request Callback
                </button>
                </div>
              </div>

              <div className="modal-footer" style={{ borderTop: 'none' }}>
                
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <div className="modal fade" id="successModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              borderRadius: '10px',
              padding: '1.5rem',
              textAlign: 'center',
            }}
          >
            <div className="modal-header border-0">
              <h5 className="modal-title w-100">🎉 Thank You!</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>We’ve received your request. Our team will contact you shortly.</p>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebModal;
