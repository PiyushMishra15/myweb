"use client"
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Paradox 2k24",
      type: "event",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1713005699/posters_and_assets/paaradoxx_oqphyo.jpg",
      start_date: "2024-04-14T17:00:00Z",
      end_date: "2024-04-14T23:59:59Z",
      description:
        "Paradox is a globally acclaimed event organized before and during NIMBUS by Team.EXE, the departmental team of Computer Science and Engineering of NIT Hamirpur. It's an online level-based game where participants look for a word signified by an image/set of images, with hints provided periodically.",
    },
    {
      id: 2,
      title: "Coding Competition",
      type: "event",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1712601007/posters_and_assets/coding-comp_ryy2zo.jpg",
      start_date: "2024-04-11T17:05:00Z",
      end_date: "2024-04-11T20:00:00Z",
      description:
        "An online competitive programming contest presenting coding challenges sure to captivate any programmer's interest. Hosted on Codeforces, the event is open for everyone and features exciting rewards for participants!",
    },
    {
      id: 3,
      title: "Game of Codes",
      type: "event",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/game_of_codes_u14t1y.jpg",
      start_date: "2023-04-15T13:30:00Z",
      end_date: "2023-04-15T16:00:00Z",
      description:
        "Game Of Codes is a short, exciting coding contest spanning two and a half hours, open to participants from NITH and other institutions. Solve interesting coding problems and win amazing prizes!",
    },
    {
      id: 4,
      title: "Trade and Code",
      type: "event",
      image_url:
        "https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/trade_and_code_ykvzaj.jpg",
      start_date: "2023-04-15T20:00:00Z",
      end_date: "2023-04-15T23:00:00Z",
      description:
        "Trade and Code combines coding with real-time trading. Teams manage a virtual currency to purchase components needed for coding challenges, with the best coders and traders winning exciting prizes!",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset before the animation starts
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
    });
  }, []);
  // Check if the event has ended
  const hasEventEnded = (endDate) => {
    const currentDate = new Date();
    return new Date(endDate) < currentDate;
  };

  return (
    <div
      className="bg-[url('/6385146.jpg')] bg-cover bg-center text-white min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/6385146.jpg')`,
      }}
    >
      <div className="container mx-auto py-8 px-4">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-24 font-lora text-blue-300 drop-shadow-lg"           data-aos="fade-down"
        >
          Previous Events
        </h1>

        {events.map((event) => (
          <div
            key={event.id}
            data-aos="fade-up"

            className="flex flex-col md:flex-row-reverse items-center md:items-start gap-3 mb-40"
          >
            {/* Right: Image */}
            <div data-aos="zoom-out-left"  className="w-full  sm:w-3/4 md:w-1/3 md:mr-12 ">
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-auto object-cover rounded-lg shadow-md spotlight-card"
              />
            </div>

            {/* Left: Text Content */}
            <div data-aos="zoom-out-right" className="w-full ml-8 sm:w-3/4 md:w-2/3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins text-blue-300   mb-4">
                {event.title}
              </h2>
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-4 font-montserrat md:w-2/3 ">
                {event.description}
              </p>
              <p className="text-xl sm:text-xl md:text-3xl font-playair mb-4">
                <span className="font-medium text-gray-300">Date:</span>{" "}
                <span className="text-blue-300">
                  {new Date(event.start_date)
                    .toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                    .replace(/,/g, " ")}
                </span>
              </p>

              {/* Event Over Button */}
              {hasEventEnded(event.end_date) && (
                <button data-aos="flip-right" className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg sm:text-xl font-bold mt-4">
                  Event Over
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Footer Line */}
        <hr className="border-t-2 border-gray-300 my-8" data-aos="flip-in" />
      </div>
    </div>
  );
};

export default Events;
