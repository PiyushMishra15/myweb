'use client';

import React from "react";
import "./TeamSection.css";
import teamData from "./teamData.json";

//const background ="/icons/backgroun.png";
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


  const renderTeamSection = (title, members) => (
    <div className="team-category">
      <h2 className="section-subtitle">{title}</h2>
      <div className="team-grid">
        {members.length > 0 ? (
          members.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.imageURL || "/path/to/default-image.jpg"}
                alt={member.name || "Team Member"}
                className="profile-img"
              />
              <h2 className="name">{member.name || "Unknown Name"}</h2>
              <h3 className="position">{member.position || "Unknown Position"}</h3>
              <p className="tagline">{member.tagline || "No Tagline Provided"}</p>
              <div className="links">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="github-icon" />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
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
    <section className="team-section">
      <h1 className="section-title">Meet Our Team</h1>

      {renderTeamSection("Final Year Members", finalYearMembers)}

      {renderTeamSection("Third Year Members", thirdYearMembers)}

      {renderTeamSection("Second Year Members", secondYearMembers)}
    </section>
  );
};

export default TeamSection;
