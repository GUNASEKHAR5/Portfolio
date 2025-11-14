import React from 'react';
import './Home.css';
import profilePic from '../../assets/images/guna_image.jpg';
import resumePDF from '../../assets/resume/Resume.pdf';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <p className="home-greeting">Hey! I am</p>
        <h1 className="home-name">
          KUDIMI<br />
          GUNASEKHAR
        </h1>
        <p className="home-subtitle">
          I am a Software Developer
        </p>
        
        <div className="home-socials">
          <a href="https://linkedin.com/in/guna-sekhar-kudimi-97b3b5326" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/GUNASEKHAR5" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/GUNASEKHARKUDIMI/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <HiOutlineExternalLink />
          </a>
        </div>

        <a href={resumePDF} download="KUDIMI_GUNASEKHAR_Resume.pdf" className="home-resume-btn">
          Download Resume
        </a>
      </div>

      <div className="home-image-container">
        <img src={profilePic} alt="Kudimi Gunasekhar" className="home-image" />
      </div>

      <a href="https://github.com/GUNASEKHAR5" target="_blank" rel="noopener noreferrer" className="github-corner-link">
        <FaGithub /> Github
      </a>
    </section>
  );
}

export default Home;