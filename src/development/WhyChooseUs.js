import React from 'react';
import './WhyChooseUs.css'; 

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Experienced Team',
      description: 'Our professionals bring years of industry experience to deliver reliable and high-quality work.',
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We listen, understand, and deliver solutions tailored to your specific needs and goals.',
    },
    {
      title: 'On-Time Delivery',
      description: 'We value your time and ensure projects are completed within deadlines, without compromising quality.',
    },
    {
      title: 'Affordable Pricing',
      description: 'Top-tier services at competitive rates—great value without hidden costs.',
    },
    {
      title: 'Quality Assurance',
      description: 'Every product goes through thorough testing and review to ensure top performance and reliability.',
    },
    {
      title: 'Ongoing Support',
      description: 'We provide dedicated after-launch support and maintenance to keep your business running smoothly.',
    },
  ];

  return (
    <section className="why-us-section py-5">
      <div className="container">
        <h2 className="text-center section-heading mb-3">Why Choose <span>Us</span></h2>
        <p className="text-center mb-5 text-muted">
          Here’s why clients trust us for their development and digital needs:
        </p>
        <div className="row g-4">
          {points.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="why-card h-100 shadow-sm p-4">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted small mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
