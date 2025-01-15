"use client"

import React from "react";
import Squares from "../../../Squares/Squares"; // Ensure you have the correct library installed

const AboutUs = () => {
  return (
    <>
   
    <div className="page-container text-white min-h-screen flex flex-col justify-center  items-center text-center font-poppins relative">
      {/* Squares Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          backgroundColor: "#000",
          zIndex: "-1",
        }}
      >
        <Squares
          speed={0.1}
          squareSize={40}
          direction="diagonal"
          borderColor="#4b5563"
          hoverFillColor="#222"
        />
      </div>

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
    </>
  );
};

export default AboutUs;
