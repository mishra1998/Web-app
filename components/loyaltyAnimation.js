import React from 'react';
import animationData from '../public/loyalty-animation.json'; // Replace with the path to your Lottie animation JSON file
import {useLottie}  from 'lottie-react';

export default function LoyaltyAnimation() {
    const options = {
        animationData: animationData,
        loop: true
      };
    
    const { View } = useLottie(options);
    
    return <>{View}</>;
};