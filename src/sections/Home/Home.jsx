import React from 'react';
import profilePic from '../../assets/images/guna_image.jpg';
import resumePDF from '../../assets/resume/Resume.pdf';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Home() {
  return (
    <section className="flex items-center justify-between py-24 min-h-[90vh] relative" id="home">
      
      <div className="flex-1 max-w-[600px]">
        <p className="text-[1.25rem] text-[var(--secondary-text)] mb-2">Hey! I am</p>
        
        <h1 className="text-[5rem] font-bold leading-[1.1] mb-6 relative pl-4 before:content-[''] before:absolute before:-left-[10px] before:top-[15px] before:bottom-[15px] before:w-[6px] before:bg-[var(--accent-color)] before:rounded-[3px]">
          KUDIMI<br />
          GUNASEKHAR
        </h1>
        
        <p className="text-[1.5rem] text-[var(--secondary-text)] mb-8">
          I am a Software Developer
        </p>
        
        <div className="flex gap-4 mb-10">
          <a 
            href="https://linkedin.com/in/guna-sekhar-kudimi-97b3b5326" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-10 h-10 text-[1.2rem] text-[var(--secondary-text)] border border-[var(--secondary-text)] rounded-lg transition-all duration-300 ease-in-out hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/GUNASEKHAR5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-10 h-10 text-[1.2rem] text-[var(--secondary-text)] border border-[var(--secondary-text)] rounded-lg transition-all duration-300 ease-in-out hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a 
            href="https://leetcode.com/u/GUNASEKHARKUDIMI/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-10 h-10 text-[1.2rem] text-[var(--secondary-text)] border border-[var(--secondary-text)] rounded-lg transition-all duration-300 ease-in-out hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] hover:-translate-y-1"
          >
            <SiLeetcode />
          </a>
        </div>

        <a 
          href={resumePDF} 
          download="KUDIMI_GUNASEKHAR_Resume.pdf" 
          className="inline-block bg-[var(--accent-color)] text-[var(--primary-text)] px-6 py-3 rounded-lg font-medium text-base transition-colors duration-300 hover:bg-[#2563eb]"
        >
          Download Resume
        </a>
      </div>

      <div className="shrink-0 ml-8">
        <img 
          src={profilePic} 
          alt="Kudimi Gunasekhar" 
          className="w-[350px] h-[350px] rounded-full object-cover" 
        />
      </div>

      <a 
        href="https://github.com/GUNASEKHAR5" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute bottom-8 left-0 text-[var(--secondary-text)] flex items-center gap-2 hover:text-[var(--primary-text)]"
      >
        <FaGithub /> Github
      </a>
    </section>
  );
}

export default Home;