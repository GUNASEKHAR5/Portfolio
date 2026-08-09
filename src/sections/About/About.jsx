import React from 'react';
import { FaLanguage, FaFlag, FaTransgender, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <section className="py-24" id="about">
      <span className="bg-[var(--card-background)] text-[var(--primary-text)] px-3 py-1 rounded-xl text-sm font-medium">
        About me
      </span>

      <h2 className="text-[2.5rem] font-bold mt-4 mb-2">
        The MultiTech Creator
      </h2>

      <p className="text-xl text-[var(--accent-color)] font-medium mb-6">
        C++ | Java | React.js | Web & Software Dev
      </p>
      
      <p className="text-[1.1rem] text-[var(--secondary-text)] leading-relaxed max-w-[800px] mb-12">
        Hi, I'm <strong>KUDIMI GUNASEKHAR</strong>, a passionate developer with a strong foundation in C++, Java, JavaScript, React.js. I love building efficient, scalable, and creative solutions from intelligent systems to modern web applications.<br /><br />
        I'm constantly learning and exploring new technologies, with a focus on clean code, smart design, and real-world impact. My goal is to bridge the gap between logic and creativity through technology.
      </p>

      <div className="flex flex-wrap gap-8 mb-12">
        <div className="bg-[var(--card-background)] p-6 rounded-lg border border-[#2a2c33] min-w-[200px]">
          <h4 className="text-base text-[var(--secondary-text)] mt-0 mb-4 flex items-center gap-2">
            <FaLanguage /> Language
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="text-[var(--primary-text)] font-medium">English</li>
            <li className="text-[var(--primary-text)] font-medium">Telugu</li>
            <li className="text-[var(--primary-text)] font-medium">Tamil</li>
          </ul>
        </div>

        <div className="bg-[var(--card-background)] p-6 rounded-lg border border-[#2a2c33] min-w-[200px]">
          <h4 className="text-base text-[var(--secondary-text)] mt-0 mb-4 flex items-center gap-2">
            <FaFlag /> Nationality
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="text-[var(--primary-text)] font-medium">Indian</li>
          </ul>
        </div>

        <div className="bg-[var(--card-background)] p-6 rounded-lg border border-[#2a2c33] min-w-[200px]">
          <h4 className="text-base text-[var(--secondary-text)] mt-0 mb-4 flex items-center gap-2">
            <FaTransgender /> Gender
          </h4>
          <ul className="list-none p-0 m-0">
            <li className="text-[var(--primary-text)] font-medium">Male (He/Him)</li>
          </ul>
        </div>
      </div>

      <div className="about-hobbies">
        <h4 className="text-[1.1rem] flex items-center gap-2 text-[var(--secondary-text)] mb-4">
          <FaHeart /> Hobbies
        </h4>
        <ul className="flex flex-wrap gap-6 list-none p-0 m-0">
          <li className="text-[var(--primary-text)] bg-[var(--card-background)] px-4 py-2 rounded-lg border border-[#2a2c33]">
            Playing Chess
          </li>
          <li className="text-[var(--primary-text)] bg-[var(--card-background)] px-4 py-2 rounded-lg border border-[#2a2c33]">
            Listening music
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;