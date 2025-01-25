'use client';

import React from "react";
import "./TeamSection.css";
import teamData from "./teamData.json";

const githubIcon = "/icons/github.png";
const linkedinIcon = "/icons/linkedin.png";

const TeamSection = () => {
  const finalYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 4
  );
  const thirdYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 3
  );
  const secondYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 2
  );
  const firstYearMembers = teamData.filter(
    (member) => member && typeof member.year === "number" && member.year === 1
  );

  const renderTeamSection = (title, members) => (
    <div className="team-category">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 mt-16 text-center font-playfair text-gray-200 glow animate-pulse">
        {title}
      </h2>
      <div className="team-grid">
        {members.length > 0 ? (
          members.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="profile-img-container">
                <img
                  src={member.imageURL || "/path/to/default-image.jpg"}
                  alt={member.name || "Team Member"}
                  className="profile-img"
                />
              </div>
              <h2 className="name">{member.name || "Unknown Name"}</h2>
              <h3 className="position">{member.position || "Unknown Position"}</h3>
              <p className="tagline">{member.tagline || "No Tagline Provided"}</p>
              <div className="links">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="icon" />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No members found.</p>
        )}
      </div>
    </div>
  );

  return (
    <section
      className=" bg-[url('/6385146.jpg')] "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/6385146.jpg')`,
      }}
    >
      <div className="">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-24 font-fontdiner bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 animate-gradient animate-title">
          Meet Our Team
        </h1>
      </div>

      {renderTeamSection("Final Year Members", finalYearMembers)}
      {renderTeamSection("Third Year Members", thirdYearMembers)}
      {renderTeamSection("Second Year Members", secondYearMembers)}
      {renderTeamSection("First Year Members", firstYearMembers)}
    </section>
  );
};

export default TeamSection;
