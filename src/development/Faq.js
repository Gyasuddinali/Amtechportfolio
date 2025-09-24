


import React, { useState } from 'react';
import './faq.css'

const faqs = [
  {
    question: "What does your web design service include?",
    answer: "Our web design service is comprehensive and includes planning, designing, building, and maintaining your website. We focus on creating visually engaging and user-friendly websites that align with your brand's identity and objectives."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we can. We offer website redesign services to modernize and enhance existing websites, improving aesthetics, functionality, and overall user experience."
  },
  {
    question: "How long does it take?",
    answer: "The timeframe for website design varies based on the project's complexity and the client's specific requirements. However, we always strive to deliver within the agreed-upon deadlines."
  },
  {
    question: "Is it mobile-friendly?",
    answer: "Yes. All websites we design are responsive, meaning they automatically adapt to the screen size of the device they're viewed on, be it a desktop, laptop, tablet, or smartphone."
  },
  {
    question: "Do you offer custom designs?",
    answer: "Absolutely! We pride ourselves on creating custom websites that are uniquely tailored to each client's specific needs and preferences. We work closely with you to understand your vision and translate it into a compelling and effective website."
  },
  {
    question: "Can I update my site?",
    answer: "Yes. We build websites on content management systems that allow you to update content on your own. We also provide training and support to help you manage your site."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title "  style={{color:'#d4af37'}}>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;



