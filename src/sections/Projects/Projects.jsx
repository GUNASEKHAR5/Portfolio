import React from 'react';
// import './Projects.css'; // No longer needed
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
    <section className="py-24" id="projects">
      {/* Section Tag */}
      <span className="bg-[var(--card-background)] text-[var(--primary-text)] px-3 py-1 rounded-xl text-sm font-medium">
        Projects
      </span>

      {/* Title with underline */}
      <h2 className="text-[2.5rem] font-bold mt-4 mb-2 relative after:content-[''] after:block after:w-[70px] after:h-[4px] after:bg-[var(--accent-color)] after:mt-2 after:rounded-[2px]">
        My Projects
      </h2>
      
      {/* Subtitle */}
      <p className="text-[1.1rem] text-[var(--secondary-text)] leading-[1.7] max-w-[800px] mb-12">
        Feel free to go through my projects and give it a star on GitHub.
      </p>

      {/* Grid Layout: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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