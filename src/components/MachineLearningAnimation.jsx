'use cleint';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/machineLearning.json'// Correct path to the JSON file

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
