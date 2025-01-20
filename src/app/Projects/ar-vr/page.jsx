"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  
  {
    id: 1,
    title: "ENIGMA",
    description:
      "Enigma is an Augmented Reality based Android event organized by Team .EXE. It is a story-based game where the participants will search for clues by interacting with the Augmented Reality model and will proceed in the story on successful submission of the answer of a particular quest. The application was made using native Kotlin and using Django as the backend framework, thus it is available only for android users. It was open for participation for students of NIT as well as globally.",

    techStack: ["Kotlin", "Django", "Firebase", "Blender"],
    thumbnailUrl:
      "https://media.licdn.com/dms/image/D4D12AQExKPZ_a1SSmg/article-cover_image-shrink_720_1280/0/1679565918776?e=2147483647&v=beta&t=ZtatrMAZHVMv7VyRoA-8EzeEcAHiYfiNrRb_xmqBBLQ",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default smooth animations
      offset: 100, // Adjust the trigger point
      easing: "ease-out-quint", // A smoother easing effect
      once: false, // Animation occurs only once
      delay: 100, // Add slight delay for each element for staggered effect
    });
  }, []);

  return (
    <div
      className="bg-[url('/6385146.jpg')] bg-cover bg-center text-white min-h-screen w-full overflow-x-hidden "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('/6385146.jpg')`,
      }}
    >
      <div className="container mx-auto py-16 px-6">
        {/* Page Title */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 font-poppins text-blue-300 drop-shadow-lg"
          data-aos="fade-down"
        >
          Our Projects
        </h1>

        <div className="text-left mb-16 pl-8" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 font-poppins relative">
            Ar-Vr
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-400 mt-2"></span>
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger the animations
            className="flex flex-col md:flex-row items-center gap-16 md:gap-28 mb-24 lg:ml-12 "
          >
            {/* Left: Image */}
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              className="w-full sm:w-2/3 md:w-1/3 md:mr-12 flex-shrink-0"
            >
              <div className="rounded-xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="w-full sm:w-2/3 md:w-2/3 text-left space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins text-blue-300">
                {project.title}
              </h2>

              {/* Tech Stack */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
                <span className="font-semibold text-gray-200">Tech Stack:</span>{" "}
                {project.techStack.join(", ")}
              </p>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl">{project.description}</p>
            </div>
          </div>
        ))}

        {/* Footer Line */}
        <hr className="border-t-2 border-gray-300 my-12" data-aos="flip-in" />
      </div>
    </div>
  );
};

export default Projects;
