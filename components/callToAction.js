"use client"
import { useState, useEffect } from 'react';
import styles from './ScrollingText.module.css';
import MyCarousel from './Carousel';

export default function LandingPage() {
  let texts = ['Commitee Is Unity'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1));
    });

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='layout'>
      <div  id="scroll-text" className={styles['crowsel-text']}>
        {texts.map((text, index) => (
          <span
            key={index}
            className={`${styles['scroll-item']} ${index === currentTextIndex ? styles['active'] : ''} crowsel-text`}
          >
            {text}
          </span>
        ))}
      </div>
      <div className='light-text'>
      Your Emergency Fund Creation Start's Here
      </div>
      <button className='action-button'>
       Start Your First Commitee
      </button>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px 0px 20px' }}>
        <img width={"70px"} src='https://assets.stablemoney.in/web-frontend/website/memberGroupImage.png' alt='profile-image' />
        <div style={{ padding: '5px 0px 0px 0px', fontWeight: '500', color:'white' }}>
          100+ members have joined already
        </div>
      </div>
      <div className="cylindiricalImages">
        <div className="cylindiricalImages-inner">
          <div class="cylindiricalImages-item">
            <img  src="https://img.freepik.com/free-vector/antique-auction-isometric-composition_1284-22062.jpg" alt="Image 1" width={10} />

          </div>
          <div className="cylindiricalImages-item">
            <img src="https://img.freepik.com/free-vector/antique-auction-isometric-composition_1284-22062.jpg" alt="Image 2" />

          </div>
          <div className="cylindiricalImages-item">
            <img src="https://img.freepik.com/free-vector/antique-auction-isometric-composition_1284-22062.jpg" alt="Image 3" />

          </div>
          <div className="cylindiricalImages-item">
            <img src="https://img.freepik.com/free-vector/antique-auction-isometric-composition_1284-22062.jpg" alt="Image 4" />

          </div>
        </div>
      </div>
    </div>
  )
};
