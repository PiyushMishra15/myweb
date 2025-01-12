"use client"



import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast"


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
    console.log("Form Submitted:", formData);
    
    toast({
      title: "Query Submitted",
      description: "We will Back To you Soon !",
    })

  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
       
       <section className="flex-grow bg-black py-10 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
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
  );
}
