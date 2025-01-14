import React from "react";
import Head from "next/head";
import DecryptedText from "../../../DecryptedText/DecryptedText";

const Workshops = async () => {
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
  ];

  // Group workshops by year
  const groupedWorkshops = workshops.reduce((acc, workshop) => {
    const year = new Date(workshop.start_date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(workshop);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedWorkshops).sort((a, b) => b - a); // Sort by year descending

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-center mb-24">
          <DecryptedText
            text="Workshops"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h1>

        {sortedYears.map((year, index) => (
          <div key={year} className="mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-24 text-center">
              {Number(year) - 1} - {year}
            </h2>
            {groupedWorkshops[year].map((workshop) => (
              <div
                key={workshop.id}
                className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 mb-40"
              >
                {/* Right Side: Image */}
                <div className="w-full sm:w-3/4 md:w-1/3 md:mr-12">
                  <img
                    src={workshop.image_url}
                    alt={workshop.title}
                    className="w-full h-auto object-cover rounded-lg shadow-md spotlight-card"
                  />
                </div>

                {/* Left Side: Title, Description, and Date */}
                <div className="w-full sm:w-3/4 md:w-2/3">
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair text-gray-100 mb-4">
                    {workshop.title}
                  </h2>
                  <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-4 font-montserrat md:w-2/3">
                    {workshop.description}
                  </p>
                  <p className="text-2xl sm:text-2xl md:text-4xl font-playair">
                    <span className="font-medium text-gray-300">Conducted on:</span>{" "}
                    <span className="text-blue-300">
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
        <hr className="border-t-2 border-gray-300 my-8" />
      </div>
    </div>
  );
};

export default Workshops;
