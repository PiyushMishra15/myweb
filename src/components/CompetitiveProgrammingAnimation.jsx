'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/CompetitiveProgramiing.json' // Correct path to the JSON file

const CompetitiveProgrammingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="competitive-programming-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default CompetitiveProgrammingAnimation;