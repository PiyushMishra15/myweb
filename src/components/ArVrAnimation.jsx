'use client'
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../src/ArVr.json'; // Correct path to the JSON file

const ArVrAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="ar-vr-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default ArVrAnimation;