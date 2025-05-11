import React from "react";
import "./AboutUs.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Divyesh Ram",
    role: "Team Lead",
    image: "me.jpg",
    twitter: "https://x.com/divyesh_ram_28",
    linkedin: "https://www.linkedin.com/in/divyesh-ram-a468b6305/",
    instagram: "https://www.instagram.com/divyesh._.ram/"
  },
  {
    name: "Purna Chandra",
    role: "Team Member",
    image: "pnc.jpg",
    twitter: "https://x.com/PNCFULLMOON",
    linkedin: "https://www.linkedin.com/in/purna-chandra-reddy-0602442b8/",
    instagram: "https://www.instagram.com/purnachandra_03/"
  },
  {
    name: "AbhiTej Reddy",
    role: "Team Member",
    image: "abhi2.jpg",
    twitter: "https://x.com/Abhitejreddy18",
    linkedin: "https://www.linkedin.com/in/abhitej-reddy-2306a2330/",
    instagram: "https://www.instagram.com/keesari__/"
  }
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>Meet Our Team</h1>
      <p>We are a team of passionate individuals dedicated to delivering excellence.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <img src={`./images/${member.image}`} alt={member.name} />
              </div>

              {/* Back Side (Now with Image) */}
              <div className="card-back">
                <img className="profile-img" src={`./images/${member.image}`} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <div className="social-icons">
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
