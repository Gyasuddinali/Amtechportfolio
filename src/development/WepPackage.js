import { useNavigate } from "react-router-dom";

const WepPackage = () => {
  const navigate=useNavigate()
  return (
    <div className="container my-5">
      <h2 className="text-center mb-3" style={{color:'#3d0c1c'}}>Pricing</h2>
      <h1 className="text-center fw-bold mb-4"  style={{color:'#d4af37'}}>Affordable pricing, stunning results</h1>
      <p className="text-center text-dark mb-5">
        Enjoy top-notch quality with our premium services, all at competitive rates that offer exceptional value for your investment.
      </p>

      <div className="row g-4 text-center">
        {/* Startup Package */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-primary">
            <div className="card-body">
              <h4 className="card-title text-warning">Startup Package</h4>
              <p className="text-muted">Ideal for startups</p>
              <h3 className="fw-bold" style={{color:'#4b1e28'}} >₹5000</h3>
              <p className="text-muted">Per Month</p>
              <ul className="list-unstyled text-dark">
                <li>Template-based website design</li>
                <li>Up to 4 website pages</li>
                <li>Website content writing with AI</li>
                <li>Basic SEO optimization</li>
                <li>Monthly website updates</li>
                <li>Social Media integration</li>
              </ul>
              <button className="btn btn-primary mt-3" onClick={()=>navigate('/contact')}>Order Now</button>
              <p className="text-success mt-2">10% discount when paid yearly</p>
            </div>
          </div>
        </div>

        {/* Pro Package */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-primary">
            <div className="card-body">
              <h4 className="card-title text-warning">Pro Package <span className="badge bg-primary ms-2">Popular</span></h4>
              <p className="text-muted">Great for growing businesses</p>
              <h3 className="fw-bold" style={{color:'#4b1e28'}}>₹10000</h3>
              <p className="text-muted">Per Month</p>
              <ul className="list-unstyled text-dark">
                <li>Startup Package +</li>
                <li>Custom website design</li>
                <li>Up to 6 website pages</li>
                <li>Email Marketing setup</li>
                <li>Advanced SEO optimization</li>
                <li>Bi-weekly website updates</li>
              </ul>
              <button className="btn btn-primary mt-3" onClick={()=>navigate('/contact')}>Order Now</button>
              <p className="text-success mt-2">15% discount when paid yearly</p>
            </div>
          </div>
        </div>

        {/* Elite Package */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-primary">
            <div className="card-body">
              <h4 className="card-title text-warning">Elite Package </h4>
              <p className="text-muted">Best for large businesses</p>
              <h3 className="fw-bold" style={{color:'#4b1e28'}}>₹15000</h3>
              <p className="text-muted">Per Month</p>
              <ul className="list-unstyled text-dark">
                <li>Pro Package +</li>
                <li>Dedicated project manager</li>
                <li>Up to 8 website pages</li>
                <li>Expert website content writing</li>
                <li>Standard CRM integration</li>
                <li>Weekly website updates</li>
              </ul>
              <button className="btn btn-primary mt-3" onClick={()=>navigate('/contact')}>Order Now</button>
              <p className="text-success mt-2">20% discount when paid yearly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WepPackage;
