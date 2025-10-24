// src/sections/Skills/Skills.jsx
import React from 'react';
import './Skills.css';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc'; 
import { 
  SiCplusplus, SiPython, SiPostgresql, SiJavascript,
  SiHtml5, SiCss3, SiReact, SiNodedotjs, SiGit, 
  SiEclipseide
} from 'react-icons/si';

const SkillIcon = ({ icon, name }) => (
  <div className="skill-card">
    {icon}
    <span>{name}</span>
  </div>
);

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <span className="section-tag">My Skills</span>
      <h2 className="section-title">My Technical Skills.</h2>
      
      <p className="skills-intro">
        Here are the technologies I work with. I'm proficient in languages like C++, Java, and Python, 
        and experienced in building web applications with JavaScript, React, and Node.js.
      </p>

      <h3 className="skills-subtitle">Languages</h3>
      <div className="skills-grid">
        <SkillIcon icon={<SiCplusplus size={40} />} name="C/C++" />
        <SkillIcon icon={<FaJava size={40} />} name="Java" />
        <SkillIcon icon={<SiPython size={40} />} name="Python" />
        <SkillIcon icon={<SiPostgresql size={40} />} name="SQL (Postgres)" />
        <SkillIcon icon={<SiJavascript size={40} />} name="JavaScript" />
        <SkillIcon icon={<SiHtml5 size={40} />} name="HTML" />
        <SkillIcon icon={<SiCss3 size={40} />} name="CSS" />
      </div>

      <h3 className="skills-subtitle">Frameworks</h3>
      <div className="skills-grid">
        <SkillIcon icon={<SiReact size={40} />} name="React" />
        <SkillIcon icon={<SiNodedotjs size={40} />} name="Node.js" />
      </div>

      <h3 className="skills-subtitle">Developer Tools</h3>
      <div className="skills-grid">
        <SkillIcon icon={<VscCode size={40} />} name="VS Code" />
        <SkillIcon icon={<SiEclipseide size={40} />} name="Eclipse" />
        <SkillIcon icon={<SiGit size={40} />} name="Git" />
      </div>
    </section>
  );
}

export default Skills;