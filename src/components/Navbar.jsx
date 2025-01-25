"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
        <div className="fixed inset-0 z-50 flex  bg-transparent backdrop-blur-sm">
          <div className="bg-transparent text-white rounded-lg p-8 max-w-3xl w-full flex justify-center items-center">
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
              <nav className="mt-20  fontdiner-swanky-regular">
                <ul className="space-y-4 text-center">
                  {[
                    { href: "/", label: "Home", icon: "/icons/home.png" },
                    { href: "/AboutUs", label: "About", icon: "/icons/about.png" },
                    { href: "/Projects", label: "Projects", icon: "/icons/projects.png" },
                    { href: "/Workshops", label: "Workshops", icon: "/icons/workshop.png" },
                    { href: "/Events", label: "Events", icon: "/icons/event.png" },
                    { href: "/Team", label: "Our Team", icon: "/icons/team.png" },
                    { href: "/ContactUs", label: "Contact Us", icon: "/icons/contact.png" },
                    { href: "/Faqs", label: "FAQs", icon: "/icons/faq.png" },
                  ].map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavigation(link.href)}
                        className="w-full flex flex-auto items-center text-left px-4 py-2 rounded-lg text-4xl font-medium transition hover:bg-purple-500 text-white bg-transparent "
                      >
                        {/* Icon */}
                        <img
                          src={link.icon}
                          alt={`${link.label} icon`}
                          className="w-8 h-8 mr-4"
                        />
                        {/* Label */}
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
