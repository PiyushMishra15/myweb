"use client"

import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast"
import { Orbitron, Playfair_Display, Montserrat, Fontdiner_Swanky } from 'next/font/google';

export default function ContactUs() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      description: "We will Back To you Soon !",
      style: {
        zIndex: 9999,
        color: "white", // Set the text color to white
      }
    });
    

    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="bg-[url('/6385146.jpg')] text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/6385146.jpg')`,
        }}>

        

        <section className="flex-grow py-10 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-24 font-fontdiner bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Write Your Name Here!!"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-2 w-full rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Write Your Email Here!!"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-2 w-full rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write Your Query!!"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 p-2 w-full rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </div>
    </>
  );
}
