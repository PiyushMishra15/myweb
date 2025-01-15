"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GradientText from '../blocks/TextAnimations/GradientText/GradientText'; // Import GradientText

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
      <div className="fixed top-0 left-0 w-full z-40 flex justify-between items-center p-4">
        {/* Drawer Icon Button */}
        <button
          onClick={toggleDrawer}
          className="text-white bg-transparent hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 dark:hover:bg-gray-800 dark:focus:ring-blue-800 transform hover:scale-110 transition duration-200"
        >
          <svg
            className="w-8 h-8"
            aria-hidden="true"
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

        {/* Logo */}
        <div>
          <Image
            src="/exe 1.png" // Replace with your logo filename
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Drawer Component */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen p-6 overflow-y-auto transition-transform transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-black text-white w-80 dark:bg-gray-800`}
        aria-labelledby="drawer-left-label"
      >

        {/* Gradient Text for Title */}
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={true}
          className="custom-class"
        >
          
        </GradientText>

        <h5
          id="drawer-left-label"
          className="inline-flex items-center mb-6 text-xl font-semibold text-gray-300 dark:text-gray-400"
        >
          Menu
        </h5>

        <button
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-4 right-4 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="space-y-4">
            {[
              { href: "/", label: "Home", icon: "M3 12h18M3 6h18M3 18h18" },
              { href: "/AboutUs", label: "About", icon: "M5 13l4 4L19 7" },
              { href: "/Projects", label: "Projects", icon: "M3 3h18v18H3V3z" },
              { href: "/Workshops", label: "Workshops", icon: "M9 20v-6h6v6h5V9L12 3 4 9v11h5z" },
              { href: "/Events", label: "Events", icon: "M7 10l5 5 5-5H7z" },
              { href: "/Team", label: "Our Team", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM2 20c0-3.31 5.33-5 10-5s10 1.69 10 5v1H2v-1z" },
              { href: "/ContactUs", label: "Contact Us", icon: "M3 8l7.89 5.26a1 1 0 001.22 0L20 8m-9 6V5" },
              { href: "/Faqs", label: "FAQs", icon: "M5 13l4 4L19 7" },
            ].map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavigation(link.href)}
                  className="flex items-center w-full text-left px-4 py-3 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 rounded-lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                  </svg>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </GradientText>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
