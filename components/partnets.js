import React from 'react';
import SectionTitle from './sectionTitle';

const PartnerImages = () => {
  const partnerLogos = [
    { name: 'Partner 1', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Group-31486.png' },
    { name: 'Partner 2', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Group-31469.png' },
    { name: 'Partner 3', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Group-31506.png' },
    { name: 'Partner 4', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/ADITYA-BIRLA-HEALTH-INSURANCE-COMPANY-LIMITED.png' },
    { name: 'Partner 5', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/HDFC-Ergo.png' },
    { name: 'Partner 6', image: 'https://www.finmapp.com/wp-content/uploads/2023/06/yes-credit-card-image.jpeg' },
    { name: 'Partner 7', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Stockal.png' },
    { name: 'Partner 8', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/SBI-Funds-Management-Private-Limited.png' },
    { name: 'Partner 9', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Bajaj-Auto-Finance.png' },
    { name: 'Partner 10', image: 'https://www.finmapp.com/wp-content/uploads/2023/06/small-case.png' },
    { name: 'Partner 11', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Group-31489.png' },
    { name: 'Partner 12', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Group-31508.png' },
    { name: 'Partner 13', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Birla-Sunlife-Pension-Fund-Limited.png' },
    { name: 'Partner 14', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/LIC-Pension-Fund-Limited.png' },
    { name: 'Partner 15', image: 'https://www.finmapp.com/wp-content/uploads/2022/09/augmont_logo.svg' },
    { name: 'Partner 16', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/UTI-Retirement-Solutions-Limited.png' },
    { name: 'Partner 17', image: 'https://www.finmapp.com/wp-content/uploads/2022/06/Quantum-Asset-Management-Company-Private-Limited.png' },
    {name:'Partner 18', image:'https://www.finmapp.com/wp-content/uploads/2022/06/ICICI-Prudential-Pension-Funds-Management-Company-Limited.png'},
    {name:'Partner 19', image:'https://www.finmapp.com/wp-content/uploads/2022/06/Kotak-Mahindra-Pension-Fund-Limited.png'},
    {name:'Partner 20', image:'https://www.finmapp.com/wp-content/uploads/2022/06/Group-31493.png'}

  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div style={{fontSize:'60px', fontWeight:'bold'}}  className="section-title">Together, we <span style={{color:'#ed650e'}}>SERVE</span></div>
        <p>TO SERVE YOU <span style={{color:'#ed650e'}} >THE BEST</span></p>
        <p style={{marginBottom: "20px"}}>Investment options, Insurance products and Debt products <br/>
        we partner with the industry leaders.</p>


        <div className="partner-grid">
          {partnerLogos.map((partner, index) => (
            <div className="partner-item" key={index}>
              <img  src={partner.image} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerImages;