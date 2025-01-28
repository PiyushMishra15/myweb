"use client";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS


const projects = [
  {
    id: 1,
    title: "BharatLaw AI",
    description:
      "BharatLaw AI is a platform that helps users and lawyers navigate the Indian Constitution by providing relevant Acts and similar past court cases for better case assessment.",
    techStack: ["Machine Learning", "StreamLit", "AWS", "TensorFlow"],
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7o_dk_Vc4la8AqzJ9bBB-azZ4jcl-EhfuQ&s",
  },
  {
    id: 2,
    title: "Rescue-Echo",
    description:
      "RescueEcho is an AI-powered micro-Doppler radar system designed to classify humans and non-living objects in disaster scenarios, enabling rapid and precise survivor detection.",
    techStack: ["Machine Learning", "Python", "MATLAB", "Django"],
    thumbnailUrl:
      "https://figures.semanticscholar.org/0c9e142ae05e7fd1c0a448f04cf5775be5e3369e/1-Figure1-1.png",
  },
  {
    id: 3,
    title: "Hydro Power Plant",
    description:
      "Developing a web app for AI-based generative design in hydro power plants aims to optimize efficiency, resource utilization, and sustainability. The application automatically generates cost-effective designs for civil, hydro-mechanical, and electro-mechanical components.",
    techStack: ["JavaScript", "Python", "PostgreSQL"],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/hydro-power-plants-generate-electricity-with-green-banner_1308-67758.jpg?w=900&t=st=1712547570~exp=1712548170~hmac=aa8ae214294d26b1ff4a3ab53e38f625b49a6590cbfecfead1583948798b4af3",
  },
  {
    id: 4,
    title: "Sky Detector",
    description:
      "The SkyDetector is designed to revolutionize solar energy analysis in urban settings. It calculates the angle of elevation for optimal solar panel placement and promotes renewable energy adoption.",
    techStack: ["React.js", "tailwind.css", "OpenCV", "Firebase"],
    thumbnailUrl:
      "https://img.freepik.com/free-vector/drone-technology-design_24908-54824.jpg?w=740&t=st=1712547922~exp=1712548522~hmac=4555dfd4c520c6c45f43e5d07c6bb3b5aedcb015ce0d814547670c266191562f",
  },
  {
    id: 5,
    title: "Sign Language Translator",
    description:
      "A groundbreaking app that translates American Sign Language (ASL) into written English text in real-time, fostering accessible communication.",
    techStack: ["Python", "OpenCV", "Mediapipe", "TensorFlow", "Keras", "TfLite", "Nltk"],
    thumbnailUrl:
      "https://tse4.mm.bing.net/th?id=OIP.5GyUhu_llPx5LGFBWg9kUwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    title: "Automatic Attendance",
    description:
      "A smart attendance app that uses facial recognition to mark attendance effortlessly, improving accuracy and efficiency.",
    techStack: ["AI/ML Model Development", "Deploying APIs"],
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRedtlsAfl5JmFiIbw3KwAvciny81LrmTLkIvWAE8aYdD79QWIkjy9IaUaKcJDD-bnHec&usqp=CAU",
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
      <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-16 fontdiner-swanky-regular bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title"
          data-aos="fade-down"
        >
          Our Projects
        </h1>

        <div className="text-left mb-16 pl-8" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 animate-gradient animate-title">
            AI-ML
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
              <div className="rounded-xl shadow-lg overflow-hidden spotlight-card">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="w-full sm:w-2/3 md:w-2/3 text-left space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title">
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
