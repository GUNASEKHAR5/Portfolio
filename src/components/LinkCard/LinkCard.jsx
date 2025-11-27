import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

function LinkCard({ title, description, link }) {
  return (
    <div className="bg-[var(--card-background)] border border-[#2a2c33] rounded-lg p-6 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:border-[var(--accent-color)]">
      
      <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-2">
        {title}
      </h3>
      
      <p className="text-[0.9rem] text-[var(--secondary-text)] leading-[1.6] flex-grow mb-6">
        {description}
      </p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-[#101114] text-[var(--primary-text)] px-4 py-3 rounded-lg font-medium text-center flex items-center justify-center gap-2 border border-[#3a3c44] transition-colors duration-300 ease-in-out hover:bg-[#2a2c33]"
      >
        <HiOutlineExternalLink /> Visit here
      </a>
    </div>
  );
}

export default LinkCard;