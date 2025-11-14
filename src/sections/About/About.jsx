import React from 'react';
import './About.css';
import { FaLanguage, FaFlag, FaTransgender, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <section className="about-section" id="about">
      <span className="section-tag">About me</span>
      <h2 className="about-title">The MultiTech Creator</h2>
      <p className="about-roles">C++ | Java | React.js | ML | Web & Software Dev</p>
      
      <p className="about-description">
        Hi, I'm <strong>KUDIMI GUNASEKHAR</strong>, a passionate developer with a strong foundation in C++, Java, JavaScript, React.js. I love building efficient, scalable, and creative solutions — from intelligent systems to modern web applications.<br /><br />
        I'm constantly learning and exploring new technologies, with a focus on clean code, smart design, and real-world impact. My goal is to bridge the gap between logic and creativity through technology.
      </p>

      <div className="about-details">
        <div className="detail-item">
          <h4><FaLanguage /> Language</h4>
          <ul>
            <li>English</li>
            <li>Telugu</li>
            <li>Tamil</li>
          </ul>
        </div>
        <div className="detail-item">
          <h4><FaFlag /> Nationality</h4>
          <ul><li>Indian</li></ul>
        </div>
        <div className="detail-item">
          <h4><FaTransgender /> Gender</h4>
          <ul><li>Male (He/Him)</li></ul>
        </div>
      </div>

      <div className="about-hobbies">
        <h4><FaHeart /> Hobbies</h4>
        <ul>
          <li>Listening music</li>
          <li>Playing Chess</li>
        </ul>
      </div>
    </section>
  );
}

export default About;