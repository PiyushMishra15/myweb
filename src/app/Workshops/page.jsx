import React from "react";
import Head from "next/head";

const Workshops = async () => {
  const workshops = [
    // Current Workshops
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
    // Previous Workshops
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
  ];

  return (
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-center mb-8 font-[Syne Mono]">
          Workshops
        </h1>
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 mb-8 border-b pb-6"
          >
            {/* Right Side: Image */}
            <div className="w-full sm:w-3/4 md:w-1/3 md:mr-12">
              <img
                src={workshop.image_url}
                alt={workshop.title}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Left Side: Title, Description, and Date */}
            <div className="w-full sm:w-3/4 md:w-2/3">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair text-gray-800 mb-4">
                {workshop.title}
              </h2>
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 mb-4 font-montserrat">
                {workshop.description}
              </p>
              <p className="text-2xl sm:text-2xl md:text-4xl font-playair">
                <span className="font-medium text-gray-800">Conducted on:</span>{" "}
                <span className="text-blue-600">
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
  );
};

export default Workshops;
