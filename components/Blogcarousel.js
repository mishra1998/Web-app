import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BlogCarousel = () => {
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
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/07/ETF-1.jpg',
        title: 'Commitee .December 7, 2019 . Rajesh mishra',
        description: 'This is the description for Card 1.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/06/senior-couple-seaside-medium-shot_23-2149021658-1536x1024.jpg',
        title: 'Card 2',
        description: 'This is the description for Card 2.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/06/home_loan.jpg',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/05/credit_score.jpg',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/08/financial-health.jpg',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/08/bnpl.jpg',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/08/interest-rate-on-home-loan.jpg',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/07/digital-gold.jpg',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      {
        imageSrc: 'https://www.finmapp.com/wp-content/uploads/2022/07/CAGR-XIRR.png',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      }
  ];

  return (
    <Carousel {...carouselSettings}>
    {cardData.map((card, index) => (
      <div className="card-layout" key={index}>
      <div style={{margin:'0px 20px 0px '}} className='image-layout'>
      <img style={{borderRadius:"20px"}}  src={card.imageSrc} alt={`Card ${index + 1}`} />
      </div>
        <div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </div>
    ))}
  </Carousel>
  );
};

export default BlogCarousel;