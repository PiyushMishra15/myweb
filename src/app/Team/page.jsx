'use client';

import { useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { Orbitron, Playfair_Display, Montserrat, Fontdiner_Swanky } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

const fontdiner = Fontdiner_Swanky({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-fontdiner',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

function team() {
  const teamMembers = [
    {
      id: 3,
      name: 'Game of Codes',
      role: 'event',
      image_url:
        'https://res.cloudinary.com/dwwajleyo/image/upload/v1711589992/posters_and_assets/game_of_codes_u14t1y.jpg',
      bio:
        'Game Of Codes is a short, exciting coding contest spanning two and a half hours, open to participants from NITH and other institutions. Solve interesting coding problems and win amazing prizes!',
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    document.querySelectorAll('.team-member').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div
        className={`bg-[url('/6385146.jpg')] bg-cover bg-center text-white min-h-screen w-full overflow-x-hidden ${orbitron.variable} ${playfair.variable} ${montserrat.variable} ${fontdiner.variable}`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/6385146.jpg')`,
        }}
      >
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-24 font-fontdiner bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title">
            Our Team
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="team-member opacity-0 transition-all duration-300 ease-in-out hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image_url  }
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold font-orbitron text-gray-100 mb-2 neon-text">{member.name}</h3>
                    <p className="text-xl text-blue-400 font-playfair mb-4">{member.role}</p>
                    <p className="text-gray-300 font-montserrat">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal line before footer */}
          <hr className="border-t-2 border-gray-700 my-16 animate-expand" />
        </div>
      </div>
    </div>
  );
}

export default team;
