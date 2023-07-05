import React, { useState } from 'react';

const Faq = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{
      width: '500px',
      margin:'20px 0px 20px'
  }}>
      {faqData.map((item, index) => (
        <div key={index}>
          <div
            className={`faq-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
          <div style={{display:'flex', justifyContent:'space-between'}}>
          <h3>{item.question}</h3>
            <span className="icon">{index === activeIndex ? '-' : '+'}</span>
          </div>
          </div>
          {index === activeIndex && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;