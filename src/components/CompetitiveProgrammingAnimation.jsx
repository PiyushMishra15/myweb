'use client';
import React from 'react';
import dynamic from "next/dynamic";

import animationData from '../../public/CompetitiveProgramiing.json' // Correct path to the JSON file
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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