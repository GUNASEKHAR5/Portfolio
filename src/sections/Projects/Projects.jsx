import React from 'react';
import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const projectData = [
  {
    title: 'CodePad',
    description:
      'A lightweight multi-language code editor supporting .txt, .c, .cpp, .h, .java, and .py files. Features a multi-tab UI with autosave and keyboard shortcuts, ProcessBuilder-based compilation for C, C++, Java, and Python, smart file detection, and multi-file Java project support.',
    tags: ['Java Swing', 'ProcessBuilder', 'File I/O', 'Multithreading'],
    link: 'https://github.com/GUNASEKHAR5/Notepad'
  },

  {
    title: 'Finance Tracker',
    description:
      'A CLI-based personal finance tracker with expense addition, search, categorization, and history. Implements trees for sorting, linked lists for history, and hash tables for fast lookups, built with a modular, object-oriented architecture.',
    tags: ['C++', 'Trees', 'Linked Lists', 'Hashing', 'OOP'],
    link: 'https://github.com/GUNASEKHAR5'
  },

  {
    title: 'Spare Change',
    description:
      'A full-stack FinTech app that auto-allocates spare change into donation, investment, and savings wallets. Includes secure REST APIs with JWT authentication, PostgreSQL transactions, a responsive React frontend, and a microservice architecture using Flask for ML-based recommendations.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API', 'JWT Auth'],
    link: 'https://github.com/GUNASEKHAR5/SPARE_CHANGE'
  },

  {
    title: 'Minimal Text Editor in xv6',
    description:
      'A lightweight text editor built inside xv6 OS. Modified file system calls for in-place editing, implemented low-level file handling in C, and gained hands-on experience with system call interfaces, OS-level programming, and memory management.',
    tags: ['xv6 OS', 'C', 'System Calls'],
    link: 'https://github.com/Gogul11/Exitor'
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <span className="section-tag">Projects</span>
      <h2 className="section-title">My Projects</h2>
      
      <p className="projects-subtitle">
        Feel free to go through my projects and give it a star on GitHub.
      </p>

      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;