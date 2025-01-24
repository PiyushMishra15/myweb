"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import animationData from '../navbar2.json'; // Correct path to the JSON file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleNavigation = (path) => {
    setIsOpen(false); // Close the drawer
    router.push(path); // Navigate to the selected path
  };

  return (
    <div className="relative">
      {/* Transparent Header */}
      <div className="fixed top-0 left-0 w-full z-40 flex justify-between items-center p-4 bg-transparent">
        {/* Drawer Icon Button */}
        <button
          onClick={toggleDrawer}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="text-white bg-transparent hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 rounded-lg p-3 transition transform hover:scale-110"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Modal for Navigation Links */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100 backdrop-blur-sm">
          <div className="bg-transparent text-white rounded-lg p-8 max-w-3xl w-full flex justify-center items-center ">
            <div className="flex-1">
              <button
                onClick={toggleDrawer}
                aria-label="Close menu"
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="mt-20 ml-52 fontdiner-swanky-regular  ">
                <ul className="space-y-4 text-center  ">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/AboutUs", label: "About" },
                    { href: "/Projects", label: "Projects" },
                    { href: "/Workshops", label: "Workshops" },
                    { href: "/Events", label: "Events" },
                    { href: "/Team", label: "Our Team" },
                    { href: "/ContactUs", label: "Contact Us" },
                    { href: "/Faqs", label: "FAQs" },
                  ].map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="w-full text-center px-4 py-2 rounded-lg text-4xl font-medium transition hover:bg-gray-600 text-white bg-transparent space-evenly"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="navbar-animation">
          

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
