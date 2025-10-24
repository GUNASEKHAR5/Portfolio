// src/components/ProjectCard/ProjectCard.js
import React from 'react';
import './ProjectCard.css';
import { HiOutlineExternalLink } from 'react-icons/hi';

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
      
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        Visit Project <HiOutlineExternalLink />
      </a>
    </div>
  );
}

export default ProjectCard;