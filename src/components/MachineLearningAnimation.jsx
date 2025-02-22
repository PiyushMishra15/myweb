'use cleint';
import React from 'react';
import dynamic from "next/dynamic";

import animationData from '../../public/machineLearning.json'// Correct path to the JSON file
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const MachineLearningAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="machine-learning-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default MachineLearningAnimation;
