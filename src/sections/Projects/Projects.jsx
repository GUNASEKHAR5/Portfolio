import React from 'react';
import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const projectData = [
  {
    title: 'SPARE - CHANGE',
    description: 'An intelligent finance app that rounds up every user transaction and automatically saves the spare change toward goals, donations, or investments. It gives real-time insights into spending, savings growth, and charitable contributions through a smart dashboard.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST API','JWT Auth'],
    link: 'https://github.com/GUNASEKHAR5'
  },
  {
    title: 'NOTEPAD',
    description: 'The Notepad Application is a simple text editor built with Java Swing for creating, opening, editing, and saving text files. It mimics basic Windows Notepad functionality with a clean and intuitive interface. The app includes a custom icon, menus, and options, showcasing core Java GUI programming concepts.',
    tags: ['Java', 'Swing', 'AWT','I/O'],
    link: 'https://github.com/GUNASEKHAR5/Notepad'
  },
  // {
  //   title: 'FINANCE TRACKER',
  //   description: 'Developed a CLI-based personal finance tracker with expense addition, search, categorization, and historyn.Implemented trees for sorting, linked lists for history, and hash tables for fast lookups.Designed a modular, object-oriented codebase ensuring scalability and structured financial data management',
  //   tags: ['C++', 'Tress', 'Linked Lists', 'Hashing','OOP'],
  //   link: 'https://github.com/GUNASEKHAR5/Notepad'
  // },
  {
    title: 'FINANCE TRACKER',
    description: 'Developed a CLI-based personal finance tracker with expense addition, search, categorization, and historyn.Implemented trees for sorting, linked lists for history, and hash tables for fast lookups.Designed a modular, object-oriented codebase ensuring scalability and structured financial data management',
    tags: ['C++', 'Tress', 'Linked Lists', 'Hashing','OOP'],
    link: 'https://github.com/GUNASEKHAR5/Notepad'
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