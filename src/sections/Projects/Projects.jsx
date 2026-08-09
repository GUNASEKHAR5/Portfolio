import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const projectData = [
  // {
  //   title: 'SecureVault AI',
  //   description:
  //     'An AI-powered Android security vault for protecting sensitive files using AES-256 encryption, biometric authentication, OCR-based document detection, and offline-first storage. Includes Geo-Lock, Time-Lock, Panic Mode, Smart Intruder Detection, encrypted cloud backup, and Decoy Vault for enhanced privacy.',
  //   tags: ['Kotlin', 'Jetpack Compose', 'Room', 'AES-256'],
  //   link: 'https://github.com/GUNASEKHAR5/SecureVault.git'
  // },
  
  {
    title: 'Research Project Financial Management System',
    description:
      'A full-stack financial management platform for university research projects with secure role-based access, automated audit logging, budget tracking, expense management, and interactive analytics dashboards. Features JWT authentication, PostgreSQL triggers, JSONB audit trails, and real-time financial insights.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/GUNASEKHAR5/Research-Project-Financial-Management-System.git'
  },

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
      <span className="bg-[var(--card-background)] text-[var(--primary-text)] px-3 py-1 rounded-xl text-sm font-medium">
        Projects
      </span>

      <h2 className="text-[2.5rem] font-bold mt-4 mb-2 relative after:content-[''] after:block after:w-[70px] after:h-[4px] after:bg-[var(--accent-color)] after:mt-2 after:rounded-[2px]">
        My Projects
      </h2>
      
      <p className="text-[1.1rem] text-[var(--secondary-text)] leading-[1.7] max-w-[800px] mb-12">
        Feel free to go through my projects and give it a star on GitHub.
      </p>

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