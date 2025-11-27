import React from 'react';
import profilePic from '../../assets/images/kgss-image1.jpg';
import resumePDF from '../../assets/resume/Resume.pdf';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Home() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-12 lg:py-24 min-h-[90vh] relative" id="home">
      
      <div className="flex-1 max-w-[600px] text-center lg:text-left mt-8 lg:mt-0">
        <p className="text-xl text-[var(--secondary-text)] mb-2">Hey! I am</p>
        
        <h1 className="text-5xl lg:text-[5rem] font-bold leading-tight mb-6 relative inline-block lg:block lg:pl-4 lg:before:content-[''] lg:before:absolute lg:before:-left-[10px] lg:before:top-[15px] lg:before:bottom-[15px] lg:before:w-[6px] lg:before:bg-[var(--accent-color)] lg:before:rounded-[3px]">
          KUDIMI<br />
          GUNASEKHAR
        </h1>
        
        <p className="text-2xl text-[var(--secondary-text)] mb-8">
          I am a Software Developer
        </p>
        
        <div className="flex justify-center lg:justify-start gap-4 mb-10">
          <a 
            href="https://linkedin.com/in/guna-sekhar-kudimi-97b3b5326" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-10 h-10 text-[1.2rem] text-[var(--secondary-text)] border border-[var(--secondary-text)] rounded-lg transition-all duration-300 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/GUNASEKHAR5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-10 h-10 text-[1.2rem] text-[var(--secondary-text)] border border-[var(--secondary-text)] rounded-lg transition-all duration-300 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a 
            href="https://leetcode.com/u/GUNASEKHARKUDIMI/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-10 h-10 text-[1.2rem] text-[var(--secondary-text)] border border-[var(--secondary-text)] rounded-lg transition-all duration-300 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] hover:-translate-y-1"
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

      <div className="shrink-0 lg:ml-8 mb-8 lg:mb-0">
        <img 
          src={profilePic} 
          alt="Kudimi Gunasekhar" 
          className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-full object-cover border-4 border-[var(--card-background)] shadow-2xl" 
        />
      </div>

      <a 
        href="https://github.com/GUNASEKHAR5" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hidden lg:flex absolute bottom-8 left-0 text-[var(--secondary-text)] items-center gap-2 hover:text-[var(--primary-text)]"
      >
        <FaGithub /> Github
      </a>
    </section>
  );
}

export default Home;