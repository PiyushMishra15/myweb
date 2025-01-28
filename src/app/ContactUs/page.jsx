"use client"; // Ensures this component is rendered client-side

import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isMounted, setIsMounted] = useState(false); // Track client-side mount

  // Ensure code that relies on the client is executed only after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Query Submitted",
      description: "We will get back to you soon!",
      style: {
        zIndex: 9999,
        color: "white",
      },
    });

    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Prevent rendering until mounted on the client
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="min-h-screen bg-black py-6 sm:py-12 text-white flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/6385146.jpg')`,
      }}
    >
      <div className="w-full max-w-6xl px-6 md:px-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold ">Contact Us</h1>
            <p className="text-gray-400 text-sm sm:text-base">
              We are tem.exe, the CSE Department Club, always here to stay connected with you! Feel free to reach out for any questions, ideas, or feedback. We're ready to help!
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent border border-gray-500 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent border border-gray-500 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts"
                rows="4"
                className="w-full bg-transparent border border-gray-500 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] hover:opacity-90"
              >
                SHARE YOUR FEEDBACK
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Get In Touch Header */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h2>

            {/* Instagram Section */}
            <p className="text-gray-400 flex items-center space-x-2">
              <i className="fab fa-instagram text-2xl text-white hover:text-pink-500 transform transition-colors duration-300 hover:scale-110"></i>
              <span className="text-white">@teamexenith</span>
            </p>

            {/* Email Section */}
            <p className="text-gray-400">
              Email us: <span className="text-white">team.exe@nith.ac.in</span>
            </p>

            {/* Social Media Links Section */}
            <div className="mt-4 flex justify-center space-x-6 sm:mt-0 flex-wrap ">
              <Link
                href="#"
                className="text-gray-400 hover:text-light-blue-500 transform transition-transform duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <BsFacebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-light-blue-500 transform transition-transform duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <BsInstagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-light-blue-500 transform transition-transform duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <BsTwitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-light-blue-500 transform transition-transform duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <BsGithub size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-light-blue-500 transform transition-transform duration-300 hover:scale-110"
                aria-label="Dribbble"
              >
                <BsDribbble size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
