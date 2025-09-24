

import StatSection from './StatSection';
import WepPackage from './WepPackage';
import WebServiceBenefit from './WebServiceBenefit';
import Faq from './Faq'
import './develop.css'
import { FaDesktop, FaMobile, FaShield, FaSpinner } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import Technology from './Technology';
import Team from './Team';
import WhyChooseUs from './WhyChooseUs'
const DevelopmentPage = () => {
  

  const cardStyle = {
    // backgroundColor: '#ffffff',
    // border: '1px solid #e3e3e3',
    // borderRadius: '8px',
    

    // marginBottom: '20px',
  };

  const iconStyle = {
    fontSize: '1.8rem',
    color: '#28a745',
    // marginBottom: '10px',
  };
  return (
    <div className="container development-section my-2">
{/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
         <div className="container">
           <a className="navbar-brand" href="/">home</a>
           <a className="navbar-brand" href="/portfolio">Portfolio</a>
                     

         </div>
     </nav> */}

<h1 className="display-4 fw-bold mb-3 text-center">
          AMTECH DIGITAL</h1><h4 className='text-dark text-center'>  SEO & Web Development Service
        </h4>
        <p className="lead mb-4 text-dark">
  We design, develop, and deliver high-performance websites and web applications 
  tailored to your business goals. Whether you're launching a startup, scaling your e-commerce store, 
  or modernizing your existing website — we bring your vision to life with clean code, responsive design, 
  and scalable architecture.
</p>
        <p className="lead mb-4 text-dark">
  Our expert team handles everything from front-end design to back-end development, SEO optimization, 
  and ongoing support. At AMTECH, we don’t just build websites — we create seamless digital experiences 
  that convert visitors into loyal customers.
</p>

        
      <StatSection />


      <h5 className="text-center text-dark mt-4"  style={{color:'#d4af37'}}>Service Features</h5>
      <h1 className="mb-4 text-center text-dark">Web Design Service Features</h1>
      <p className="text-center text-dark">
        Whether you need a simple website to establish your online presence or a complex e-commerce platform, we've got you covered.
      </p>

          {/* <div className="col-md-6"> */}
            <div className="feature-card" style={cardStyle}>
              
              <h5 className="feature-title"><FaDesktop style={{color:"white",fontSize:"2rem"}}></FaDesktop><FaMobile style={{color:"white",fontSize:"2rem"}}></FaMobile>Responsive Design</h5>
              <p className="feature-description">
     In today's mobile-first world, a responsive website isn't optional — it's essential. At [Your Business Name], we specialize in responsive web design that looks stunning and performs flawlessly across all devices — from smartphones and tablets to desktops.

Our expert designers ensure your site automatically adjusts to screen size, creating a seamless experience for every user. Not only does this improve user engagement, but it also boosts your SEO rankings — Google prioritizes mobile-friendly websites.
              </p>
            </div>
            <div className="feature-card">
            
              <h5 className="feature-title"><FaSearch style={{color:"white",fontSize:"2rem"}}></FaSearch> SEO-Optimized</h5>
              <p className="feature-description">
                We design websites with SEO in mind to improve your website's visibility and ranking in search engine results.
                Our team of experienced professionals uses the latest tools and strategies to ensure every project is completed on time and within budget. We’re committed to customer satisfaction,
                 offering personalized support and transparent communication every step of the way.
              </p>
            </div>
            <div className="feature-card">
              
              <h5 className="feature-title"><FaSpinner style={{color:"white",fontSize:"2rem"}}></FaSpinner>Fast Loading Times</h5>
              <p className="feature-description">
                The quick loading times provided by our designs' adherence to best practices enhance the user experience and SEO.
             Nobody likes waiting — especially online. A slow website drives users away and hurts your Google rankings. That’s why [Your Business Name] focuses on delivering websites that load in under 3 seconds, every time.

We use performance best practices like optimized images, clean code, and smart caching to make your site fast, responsive, and reliable — no matter where your users are.
              </p>
            </div>

  <div className="feature-card">
            
              <h5 className="feature-title"><FaShield style={{color:"white",fontSize:"2rem"}}></FaShield>Security Measures</h5>
              <p className="feature-description">
                We prioritize your website's security by using SSL certification, secure coding practices, and regular security updates.
                Your website is your digital storefront — and just like a physical store, it needs protection. At [Your Business Name], we implement robust security measures to safeguard your site from threats like malware, data breaches, and hacking attempts.

From SSL certificates to firewalls and secure coding practices, we take every step to ensure your site is protected — and your users’ trust stays intact.
              </p>
            </div>

          {/* </div> */}


    <WepPackage></WepPackage>
      <div className="container-fluid text-white my-5 p-4">
        <h1 className="feature-title"  style={{color:'#d4af37'}}>Website Design Overview</h1>
        <p className="feature-description text-dark">
          Our Web Design Service is a comprehensive solution tailored to create compelling digital experiences for your brand and audience. In the age of digital first impressions, we understand that an effective website is not only about attractive aesthetics but also about excellent functionality, intuitive navigation, and a seamless user experience.
        </p>
        <p className="feature-description text-dark">
          <strong>Competitive Pricing:</strong> High-quality services at reasonable prices ensure a great return on investment.
        </p>
        <p className="feature-description text-dark">
          <strong>Quality Assurance:</strong> We integrate quality checks into every stage of our workflow to ensure top-tier results.
        </p>

<WebServiceBenefit></WebServiceBenefit>
<Technology></Technology>
<Team></Team>
<WhyChooseUs></WhyChooseUs>
        <Faq></Faq>

      </div>
    </div>
  );
};

export default DevelopmentPage;

