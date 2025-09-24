
import React from 'react';
import logo from './image/logo.jpeg'; 

import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import {
  FaCreditCard,
  FaGooglePay,
  FaApplePay,
  FaPaypal,
  FaMoneyBillWave,
  FaQrcode,
} from 'react-icons/fa';
import paytm from './image/paytm.png'
import google from './image/google-pay.png'
import amazon from './image/amazon-pay.png'
import credit from './image/credit-card.png'
import apple from './image/apple-pay.png'
import debit from './image/debit-card.png'
import qr from './image/qr-code.png'
const Footer = () => {
  return (
    <footer className="bg-light rounded text-dark pt-4 mt-5">
      <div className="container">
        {/* Top: Logo + Contact */}
        <div className="row align-items-center text-center text-md-start mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <img src={logo} alt="the visionry promotor Logo" style={{ maxWidth: '180px' }} />
          </div>
          {/*contct info */}
         </div>

{/* <div className="row align-items-center text-center text-md-start mb-4">
  <div className="col-md-4 mb-3 mb-md-0">
    <img src={logo} alt="The Visionary Promoter Logo" style={{ maxWidth: '180px' }} />
  </div>

  <div className="col-md-8">
    <h5 className="fw-bold">About The Visionary Promoter</h5>
    <p className="mb-2">
      The Visionary Promoter is a dynamic movement dedicated to empowering artists, creators, and entrepreneurs through innovative events, curated experiences, and impactful branding. We aim to connect visionaries and audiences across the nation.
    </p>

   
  </div>
</div> */}



        {/* Middle: Links + Newsletter */}
        <div className="row">
          {/* Information */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/contact-us" className="text-dark text-decoration-none">Contact Us</a></li>
              <li><a href="/payment-cancellation-policy" className="text-dark text-decoration-none">Payment & Cancellation Policy</a></li>
              <li><a href="/terms-and-conditions" className="text-dark text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/privacy-policy" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="/become-ua-partner" className="text-dark text-decoration-none">Become UA Partner</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 col-12 col-sm-6 col-lg-3 text-dark">
            <h5>Quick Links</h5>
            <ul className="list-unstyled text-dark">
              <li><a href="/adventure-activities" className="text-dark text-decoration-none">Adventure Activities</a></li>
              <li><a href="/tour-packages" className="text-dark text-decoration-none">Tour Packages</a></li>
              <li><a href="/explore-destination" className="text-dark text-decoration-none">Explore Destination</a></li>
              <li><a href="/report-problem" className="text-dark text-decoration-none">Report a Problem</a></li>
            </ul>
          </div>
{/*contact info*/}
 <div className="col-md-4 mb-4 col-12 col-sm-6 col-lg-3">
            <h5>Contact Us</h5>
            <p className="mb-1"><strong>+91 9199245536</strong> (New Booking )</p>
            <p className="mb-1"><strong>+91 7545060942</strong> (Existing Booking )</p>
            <p className="mb-0">
              <a
                href="mailto:contact@visionarypromoters.in"
                className="text-dark text-decoration-none"
              >
                contact@PRADISE CLIFF.in
              </a>
            </p>
          </div>
          {/* Newsletter & Social */}
          <div className="col-md-4 mb-4 col-12 col-sm-6 col-lg-3">
            <h5>Social Links</h5>
            {/* <form className="d-flex mb-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="form-control me-2" placeholder="Enter your email" />
              <button type="submit" className="btn btn-warning">Subscribe</button>
            </form> */}

            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaFacebookF className='text-primary'/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaInstagram className='text-danger'/>
              </a>
              <a href="https://wa.me/+919199245536" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <FaWhatsapp className='text-success' />
              </a>
              <a href="mailto:contact@visionarypromoters.in" className="text-white fs-5">
                <FaEnvelope className='text-danger'/>
              </a>
            </div>
          </div>



        </div>


{/* Payment Methods */}
<div className="row mt-4">
  <div className="col text-center">
    <h6 className="text-uppercase mb-3">We Accept</h6>
    <div className="d-flex flex-wrap justify-content-center gap-4 align-items-center">
      <img src={paytm} alt="Paytm" style={{ height: '32px' }} />
      <img src={google} alt="googlepay" style={{ height: '32px' }} />
      <img src={amazon} alt="amazon" style={{ height: '32px' }} />
      <img src={qr} alt="qr" style={{ height: '32px' }} />
      <img src={apple} alt="apple" style={{ height: '32px' }} />
        <img src={debit} alt="debit" style={{ height: '32px' }} />
      <img src={credit} alt="credit" style={{ height: '32px' }} />
    </div>
  </div>
</div>



 


        {/* Bottom: Copyright */}
        <div className="row">
          <div className="col text-center py-3 border-top border-secondary">
            <small>&copy; {new Date().getFullYear()} Visionary Promoters. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
