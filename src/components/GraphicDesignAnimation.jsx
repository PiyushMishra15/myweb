'use client'
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/GraphicDesign.json' // Correct path to the JSON file

const GraphicDesignAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="graphic-design-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default GraphicDesignAnimation;