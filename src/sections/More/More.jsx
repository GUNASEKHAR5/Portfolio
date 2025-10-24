// src/sections/More/More.js
import React from 'react';
import './More.css';
import LinkCard from '../../components/LinkCard/LinkCard';

// Add your personal links here
const links = [
  {
    title: "LinkedIn",
    description: "My Social media to connect and share knowledge.",
    link: "https://linkedin.com/in/guna-sekhar-kudimi-97b3b5326" 
  },
  {
    title: "LeetCode",
    description: "I write codes on a daily basis and I have solved 50+ problems of DSA.",
    link: "https://leetcode.com/u/GUNASEKHARKUDIMI/"
  },
  {
    title: "Github",
    description: "See all projects and daily progression on my github.",
    link: "https://github.com/GUNASEKHAR5"
  }
];

function More() {
  return (
    <section className="more-section" id="more">
      <span className="section-tag">More</span>
      <h2 className="section-title">More</h2>
      
      <div className="more-grid">
        {links.map((item) => (
          <LinkCard 
            key={item.title}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default More;