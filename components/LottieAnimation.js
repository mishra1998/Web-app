import React from 'react';
import animationData from '../public/your-animation.json'; // Replace with the path to your Lottie animation JSON file
import {useLottie}  from 'lottie-react';

export default function LottieAnimation() {
    const options = {
        animationData: animationData,
        loop: true
      };
    
    const { View } = useLottie(options);
    
    return <>{View}</>;
};