"use client";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationComponent = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/animations/animations.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <Lottie animationData={animationData} className="w-full h-full" />
    </div>
  );
};

export default AnimationComponent;
