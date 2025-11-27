import React from 'react';
// import './Skills.css'; // No longer needed
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc'; 
import { 
  SiCplusplus, SiPostgresql, SiJavascript,
  SiHtml5, SiCss3, SiReact, SiNodedotjs, SiGit, 
  SiEclipseide
} from 'react-icons/si';

const SkillIcon = ({ icon, name }) => (
  <div className="bg-[var(--card-background)] border border-[#2a2c33] rounded-lg p-6 flex flex-col items-center justify-center min-w-[120px] gap-4 text-[var(--secondary-text)] transition-all duration-300 ease-in-out hover:text-[var(--accent-color)] hover:-translate-y-[5px] hover:border-[var(--accent-color)]">
    {icon}
    <span className="font-medium text-[var(--primary-text)]">{name}</span>
  </div>
);

function Skills() {
  return (
    <section className="py-24" id="skills">
      {/* Section Tag */}
      <span className="bg-[var(--card-background)] text-[var(--primary-text)] px-3 py-1 rounded-xl text-sm font-medium">
        My Skills
      </span>

      {/* Title with underline */}
      <h2 className="text-[2.5rem] font-bold mt-4 mb-2 relative after:content-[''] after:block after:w-[70px] after:h-[4px] after:bg-[var(--accent-color)] after:mt-2 after:rounded-[2px]">
        My Technical Skills.
      </h2>
      
      {/* Intro Text */}
      <p className="text-[1.1rem] text-[var(--secondary-text)] leading-[1.7] max-w-[800px] mb-12">
        Here are the technologies I work with. I'm proficient in languages like C++, Java, and Python, 
        and experienced in building web applications with JavaScript, React, and Node.js.
      </p>

      {/* --- Languages --- */}
      <h3 className="text-[1.5rem] font-semibold text-[var(--primary-text)] mt-12 mb-6">
        Languages
      </h3>
      <div className="flex flex-wrap gap-6">
        <SkillIcon icon={<SiCplusplus size={40} />} name="C/C++" />
        <SkillIcon icon={<FaJava size={40} />} name="Java" />
        {/* <SkillIcon icon={<SiPython size={40} />} name="Python" /> */}
        <SkillIcon icon={<SiPostgresql size={40} />} name="SQL (Postgres)" />
        <SkillIcon icon={<SiJavascript size={40} />} name="JavaScript" />
        <SkillIcon icon={<SiHtml5 size={40} />} name="HTML" />
        <SkillIcon icon={<SiCss3 size={40} />} name="CSS" />
      </div>

      {/* --- Frameworks --- */}
      <h3 className="text-[1.5rem] font-semibold text-[var(--primary-text)] mt-12 mb-6">
        Frameworks
      </h3>
      <div className="flex flex-wrap gap-6">
        <SkillIcon icon={<SiReact size={40} />} name="React" />
        <SkillIcon icon={<SiNodedotjs size={40} />} name="Node.js" />
      </div>

      {/* --- Developer Tools --- */}
      <h3 className="text-[1.5rem] font-semibold text-[var(--primary-text)] mt-12 mb-6">
        Developer Tools
      </h3>
      <div className="flex flex-wrap gap-6">
        <SkillIcon icon={<VscCode size={40} />} name="VS Code" />
        <SkillIcon icon={<SiEclipseide size={40} />} name="Eclipse" />
        <SkillIcon icon={<SiGit size={40} />} name="Git" />
      </div>
    </section>
  );
}

export default Skills;