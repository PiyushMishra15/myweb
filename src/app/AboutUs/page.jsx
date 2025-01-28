"use client"
import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures iframe only renders on the client side
  }, []);

  if (!isClient) return null; // Optionally return a loading state

  return (
    <div className="bg-[url('/6385146.jpg')] page-container text-white min-h-screen flex flex-col justify-center  items-center text-center font-poppins relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/6385146.jpg')`,
      }}>

      {/* Header */}
      <h2 className="text-[45px] mt-24 leading-tight font-aldrich font-semibold mb-6 md:mb-8">
        TEAM <span className="text-[#D29DFF]">.EXE</span>
      </h2>
      <hr className="w-16 border-b-2 border-[#D29DFF] mb-8 animate-pulse mx-auto" />

      {/* Content Section */}
      <div className="content text-lg sm:text-xl w-[80%] sm:w-[90%] mb-8 px-4 sm:px-8">
      <p className="team-description text-gray-300 shadow-lg mb-8 leading-relaxed">
            We are a team of passionate and hardworking engineers dedicated to adding value to every aspect of tech and development. Not only do we adhere to a strong commitment to technology, but we also love to add value to society and the world as a whole. We strive to innovate, collaborate, and create solutions that push the boundaries of what's possible.
            <br />
            <br />
            Join us and experience the wonders that the tech world has to offer with us. It's assured that you will never feel the same again. Together, we embark on a journey of continuous learning, growth, and impact. With Team .EXE, the possibilities are endless, and the future is bright. Let's shape the world together, one line of code at a time.
          </p>

        <p className="subheading text-2xl text-[#d7b7f3] shadow-md font-medium mb-8">
          Where Ideas Meet Innovation
        </p>
        <hr className="w-16 border-b-2 border-[#d0adee] mb-8 mx-auto" />
      </div>

      {/* Video Section */}
      <div className="video-container relative mx-auto w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mb-12">
        <iframe
          className="w-full h-[315px] sm:h-[380px] lg:h-[450px] rounded-lg shadow-xl"
          src="https://www.youtube.com/embed/AfGBmu1eRYs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
