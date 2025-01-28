"use client"
import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";


import animationData from '../../public/webdev.json'; // Correct path to the JSON file
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const WebDevAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  // Check if we are running on the client (window or document is available)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (!isClient) return null; // Render nothing during SSR or render a loader

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="web-dev-animation">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default WebDevAnimation;
