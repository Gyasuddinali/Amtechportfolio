import React from 'react';

const WebServiceBenefit = () => {
 
  const cardStyle = {
    // backgroundColor: '#ffffff',
    // border: '1px solid #e3e3e3',
    // borderRadius: '8px',
    

    marginBottom: '20px',
  };

  const iconStyle = {
    fontSize: '1.8rem',
    color: '#28a745',
    marginBottom: '10px',
  };

  return (
    <div>
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row text-dark">
 
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className='text-center'  style={{color:'#d4af37'}}>Service Benefits</h2>
            <h1 className='text-center' style={{color:'#d4af37'}}>
SEO strategies personalized to align with your brand identity</h1>
            <p className=" text-dark">
              Unlock the power of our SEO services with custom strategies designed to boost your online visibility and drive targeted traffic to your site.
              We create optimized websites that not only reflect your brand's identity but also enhance your search engine rankings.
            </p>
            <p className="text-dark">
              Our personalized approach ensures that your website is both user-friendly and search engine-friendly, helping you connect with your audience
              and achieve lasting online success.
            </p>
          </div>


          
          <div className="col-md-6">
            <div style={cardStyle}>
              <div style={iconStyle}>🎯</div>
              <h5 className="text-dark">Unique Brand Identity</h5>
              <p className="text-dark">
                Tailored SEO strategies that align with your brand's personality and values, ensuring enhanced visibility and a lasting impact online.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={iconStyle}>📈</div>
              <h5 className="text-dark">Scalability</h5>
              <p className="text-dark">
                SEO strategies that evolve with your business, ensuring continuous growth and seamless updates to keep you ahead of the competition.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={iconStyle}>🔧</div>
              <h5 className="text-dark">Ongoing Support</h5>
              <p className="text-dark">
                Ongoing SEO support and regular optimizations to keep your website secure, up-to-date, and performing at its peak in search engine rankings.
              </p>
            </div>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default WebServiceBenefit;
