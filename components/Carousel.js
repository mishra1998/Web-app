import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
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

  const cardData = [
    {
      dataPercentage: '3%',
      description: 'of Indians are not aware of the corpus required for retirement',
    },
    {
      dataPercentage: '89%',
      description: "of the parents are willing to go into debt to finance their child's education",
    },
    {
      dataPercentage: '76%',
      description: 'of health care expenditure is done out of pocket by Indians',
    },
    {
      dataPercentage: '3%',
      description: 'is the insurance (health/life) penetration in India, which is a major pitfall',
    },
    {
      dataPercentage: '89%',
      description: 'of Indians use their credit cards or borrowed money for emergency',
    },
    {
      dataPercentage: '76%',
      description: 'of Indians lack appropriate planning for financial independence',
    },
    {
      dataPercentage: '3%',
      description: 'of the Millenium Gen have an inclination towards high risk and high return',
    },
  ];

  return (
    <Carousel {...carouselSettings}>
    {cardData.map((card, index) => (
      <div key={index}>
        <div className="card-info">
          <div className="percentage-circle">{card.dataPercentage}</div>
          <p style={{color:'white'}}>{card.description}</p>
        </div>
      </div>
    ))}
  </Carousel>
  );
};

export default MyCarousel;