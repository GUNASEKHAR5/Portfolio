import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-[var(--card-background)] border border-[#2a2c33] rounded-lg p-6 flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:border-[var(--accent-color)]">
      
      <h3 className="text-xl font-semibold text-[var(--primary-text)] mt-0 mb-3">
        {title}
      </h3>
      
      <p className="text-[0.9rem] text-[var(--secondary-text)] leading-[1.6] grow mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="bg-[#2a2c33] text-[var(--secondary-text)] px-2 py-1 rounded text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[var(--primary-text)] font-medium flex items-center gap-2 transition-colors duration-300 hover:text-[var(--accent-color)]"
      >
        Visit Project <HiOutlineExternalLink />
      </a>
    </div>
  );
}

export default ProjectCard;