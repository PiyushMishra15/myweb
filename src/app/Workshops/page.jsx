"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { Orbitron, Playfair_Display, Montserrat, Fontdiner_Swanky } from "next/font/google"

<Image
  src="https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/backend_workshop_ulo5ql.jpg"
  alt="Backend Workshop"
  width={500} // Replace with the appropriate width
  height={300} // Replace with the appropriate height
  className="w-full h-auto object-cover rounded-lg shadow-md spotlight-card"
/>


const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const fontdiner = Fontdiner_Swanky({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-fontdiner",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const Workshops = () => {
  const workshops = [
    {
      id: 11,
      title: "INTRODUCTION TO BACKEND",
      type: "workshop",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/backend_workshop_ulo5ql.jpg",
      start_date: "2024-02-14T23:27:20",
      end_date: "2024-02-15T17:00:00Z",
      description:
        "This backend workshop is a training session focused on the development and maintenance of the server-side of software applications. This workshop typically covers topics such as backend technologies like Node.js, databases, API integration, security, and performance optimization. Participants learn how to create efficient and scalable backend systems to support frontend applications. By attending this backend workshop, developers can enhance their technical skills and stay up-to-date with the latest trends in backend development.",
    },
    {
      id: 9,
      title: "BUG HUNTING WORKSHOP",
      type: "workshop",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589993/posters_and_assets/bug_hunting_k612tn.jpg",
      start_date: "2023-03-19T10:00:00Z",
      end_date: "2023-03-19T13:00:00Z",
      description:
        "Through this workshop, participants acquired the fundamentals of security vulnerabilities, with a focus on web-specific flaws, and got hands-on practice detecting bugs on real platforms. The information-gathering phase of ethical hacking, which can span anything from network infrastructure to employee contact information, was explained to the participants.",
    },
    {
      id: 10,
      title: "NFT CREATION WORKSHOP",
      type: "workshop",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589991/posters_and_assets/Nft_creation_sd6jmf.jpg",
      start_date: "2023-02-05T16:00:00Z",
      end_date: "2023-02-05T18:00:00Z",
      description:
        "The goal of this session was to provide the students with a foundational understanding of blockchain technology and the decentralized technology world, as well as hands-on experience building NFTs on the Polygon network and putting their data on IPFS. The workshop covered the Polygon network, its characteristics, and how to deploy a smart contract to it in addition to smart contracts, their structure, and the many components that make up a smart contract.",
    },
  ]

  // Group workshops by year
  const groupedWorkshops = workshops.reduce((acc, workshop) => {
    const year = new Date(workshop.start_date).getFullYear()
    if (!acc[year]) acc[year] = []
    acc[year].push(workshop)
    return acc
  }, {})

  const sortedYears = Object.keys(groupedWorkshops).sort((a, b) => b - a) // Sort by year descending

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-on-scroll")
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    document.querySelectorAll(".workshop-item").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`bg-gradient-to-b from-gray-900 to-black text-white min-h-screen ${orbitron.variable} ${playfair.variable} ${montserrat.variable} ${fontdiner.variable}}`}
    >
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-24 font-fontdiner bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient animate-title">
          Workshops
        </h1>

        {sortedYears.map((year, index) => (
          <div key={year} className="mb-24 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center font-playfair text-gray-200 glow animate-pulse">
              {Number(year) - 1} - {year}
            </h2>
            {groupedWorkshops[year].map((workshop, idx) => (
              <div
                key={workshop.id}
                className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-32 transition-all duration-300 ease-in-out hover:scale-105 workshop-item opacity-0"
              >
                {/* Left Side: Poster Image */}
                <div className="w-full sm:w-3/4 md:w-1/3 md:mr-12">
  <img
    src={workshop.image_url}
    alt={workshop.title}
    className="w-full h-auto object-cover rounded-xl shadow-md spotlight-card" // Changed rounded-lg to rounded-xl
  />
</div>


                {/* Right Side: Title, Description, and Date */}
                <div className="w-full md:w-1/2 lg:w-3/5">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-orbitron text-gray-100 mb-6 leading-tight neon-text">
                    {workshop.title}
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-montserrat leading-relaxed">
                    {workshop.description}
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-playfair">
                    <span className="font-medium text-gray-400">Conducted on:</span>{" "}
                    <span className="text-blue-400 font-semibold">
                      {new Date(workshop.start_date)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        .replace(/,/g, " ")}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Horizontal line before footer */}
        <hr className="border-t-2 border-gray-700 my-16 animate-expand" />
      </div>
    </div>
  )
}

export default Workshops

