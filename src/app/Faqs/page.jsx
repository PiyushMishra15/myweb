"use client";
import React, { useState } from "react";
import Squares from "../../../Squares/Squares";

export default function App() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);
  const [collapse5, setCollapse5] = useState(false);

  const toggleCollapse1 = () => setCollapse1(!collapse1);
  const toggleCollapse2 = () => setCollapse2(!collapse2);
  const toggleCollapse3 = () => setCollapse3(!collapse3);
  const toggleCollapse4 = () => setCollapse4(!collapse4);
  const toggleCollapse5 = () => setCollapse5(!collapse5);

  return (
    <>
    <div className="relative min-h-screen  text-white py-10 px-4 ">

      {/* Background Squares */}
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

      {/* FAQ Content */}
      <div className="container mx-auto mt-10 px-4 relative z-10  ">
        <div className="bg-gray-800 shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>

          <div className="space-y-4">
            {/* Question 1 */}
            <div
              className="cursor-pointer p-4 border-b hover:bg-gray-700 transition duration-200 ease-in-out"
              onClick={toggleCollapse1}
            >
              <h5 className="text-xl font-semibold text-gray-100">
                Who can participate in our Events?
              </h5>
              <div
                className={`mt-2 transition-all duration-500 ease-in-out ${
                  collapse1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-300">
                  Our events are open to everyone, regardless of their branch/college. We welcome everyone with open arms.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div
              className="cursor-pointer p-4 border-b hover:bg-gray-700 transition duration-200 ease-in-out"
              onClick={toggleCollapse2}
            >
              <h5 className="text-xl font-semibold text-gray-100">
                What contributions Team .EXE do in Nimbus?
              </h5>
              <div
                className={`mt-2 transition-all duration-500 ease-in-out ${
                  collapse2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-300">
                  Team .EXE does a lot of technical stuff during the Nimbus. We organize workshops, events, games, and work on various projects.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div
              className="cursor-pointer p-4 border-b hover:bg-gray-700 transition duration-200 ease-in-out"
              onClick={toggleCollapse3}
            >
              <h5 className="text-xl font-semibold text-gray-100">
                Are Team .EXE workshops free?
              </h5>
              <div
                className={`mt-2 transition-all duration-500 ease-in-out ${
                  collapse3 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-300">
                  Yes, indeed! The workshops organized by Team .EXE are absolutely free for everyone to attend.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div
              className="cursor-pointer p-4 border-b hover:bg-gray-700 transition duration-200 ease-in-out"
              onClick={toggleCollapse4}
            >
              <h5 className="text-xl font-semibold text-gray-100">
                Who can Join Our Club?
              </h5>
              <div
                className={`mt-2 transition-all duration-500 ease-in-out ${
                  collapse4 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-300">
                  Our Club is open to anyone and everyone, regardless of their branch. We conduct interviews every year for selecting new members from First & Second year.
                </p>
              </div>
            </div>

            {/* Question 5 */}
            <div
              className="cursor-pointer p-4 border-b hover:bg-gray-700 transition duration-200 ease-in-out"
              onClick={toggleCollapse5}
            >
              <h5 className="text-xl font-semibold text-gray-100">
                How can I stay updated about club activities?
              </h5>
              <div
                className={`mt-2 transition-all duration-500 ease-in-out ${
                  collapse5 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-300">
                  You can stay updated about the club activities through our official social media handles such as Instagram, LinkedIn, and our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}
