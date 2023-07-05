import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StarRating from "./Star-rating";
import defaultProfileImage from '../public/img/user3.jpg';

const Testimonials = () => {
  const carouselSettings = {
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    autoPlay: true,
    interval: 2000,
    infiniteLoop: true,
    stopOnHover: true,
    swipeable: true,
    transitionTime: 500,
    emulateTouch: true,
    centerMode: true,
    centerSlidePercentage: 33.33,
    dynamicHeight: false,
  };
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-zoom-animation');
          } else {
            entry.target.classList.remove('show-zoom-animation');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);


  const cardData = [
    {
      name: 'Shivam',
      title: '',
      review: 'I have tried other platforms in the past as well and have to say that this is one of the great platforms for anyone to use.'
    },
    {
      name: 'Nishant',
      title: '',
      review: 'It is a great app for managing my finance and learning more about investment. It is easy to use and user-friendly.'
    },
    {
      name: 'Vipul',
      title: 'Product Manager',
      review: 'Good app to start with your financial needs. The best thing is you will access everything on a single platform. Investment to Loan, everything is available on this app.'
    },
    {
      name: 'Aman Patel',
      title: 'Student',
      review: 'I have tried other platforms in the past as well and have to say that this is one of the great platforms for anyone to use.'
    },
    {
      name: 'Purnank Sharma',
      title: 'Purchase Manager',
      review: 'The app is quite good for those looking for new-age investment platforms. The UI is very good, and the overall app is easy to use and begin your financial journey.'
    },
    {
      name: 'Vaishali Sethia',
      title: 'Customer Service Manager',
      review: 'Very helpful app, especially for the ones who need financial assistance like me. The interface of the platform is also quite good.'
    },
  ];

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">User's Reviews</h2>
      <div className="testimonials-carousel-wrapper">
        <Carousel {...carouselSettings}>
        {cardData.map((card, index) => (
            <div
              key={index}
              ref={testimonialsRef}
              className="testimonials-card"
            >
            <div style={{backgroundColor: '#e4e986'}} key={index} className="testimonials-card">
              <div className="testimonials-card-content">
                <div className="testimonials-left-section">
                  <StarRating />
                  <div className="testimonials-review">{card.review}</div>
                </div>
                <div className="testimonials-right-section">
                  <div className="testimonials-details">
                    <div className="testimonials-name">{card.name}</div>
                    {card.title && <div className="testimonials-title">{card.title}</div>}
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;