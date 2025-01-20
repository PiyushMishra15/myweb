"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "Smart Solutions for Local Home Repair Services",
    description:
      "A platform connecting homeowners with trusted local repair experts, offering convenient booking, transparent pricing, and quality assurance for home repairs.",
    techStack: ["Flutter", "Node.js", "MongoDB", "Firebase", "WebRTC"],
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMn3prTTzcSRQ8NDFNWMRr8ndUszLXRPXfDQ&s",
  },
  {
    id: 2,
    title: "Accident Alert and Detection System",
    description:
      "A real-time car accident detection system using accelerometer, GPS, and GSM to alert emergency services and family, ensuring timely medical intervention and rescue.",
    techStack: ["flutter", "Arduino", "Gsm Module", "Node js"],
    thumbnailUrl:
      "https://i.ytimg.com/vi/WNezQ0maD9I/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Unlocking Shared Parking Solutions for Urban Ease",
    description:
      "A mobile app that connects drivers with homeowners renting out unused garages, addressing parking shortages and creating a community-driven solution.",
    techStack: ["Flutter", "Node.js", "Stripe", "Firebase"],
    thumbnailUrl:
      "https://tse4.mm.bing.net/th?id=OIP.pe_TByBfmDPvL71MZW9swgHaE3&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    title: "PARADOX",
    description:
      "Paradox is a globally acclaimed event organized by Team .EXE in Nimbus in past years. The event is conducted on the paradox app made by Team .Exe. The app has sign-in and sign-up features for users to login and solve mind-blowing puzzles available on the app and also show their score on the leaderboard. This year's Paradox is redesigned by us to be a “Team Competition”.",
    techStack: ["Kotlin", "MongoDB", "Node.js", "Express.js"],
    thumbnailUrl:
      "https://res.cloudinary.com/dwwajleyo/image/upload/v1712863572/posters_and_assets/project_thumbnails/paradox-projects_cig9ld.png",
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
      className="bg-[url('/6385146.jpg')] bg-cover bg-center text-white min-h-screen w-full overflow-x-hidden"
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
            App Dev
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-400 mt-2"></span>
          </h2>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger the animations
            className="flex flex-col md:flex-row items-center gap-16 md:gap-28 mb-24 lg:ml-12"
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
