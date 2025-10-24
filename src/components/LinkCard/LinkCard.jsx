import React from 'react';
import './LinkCard.css';
import { HiOutlineExternalLink } from 'react-icons/hi';

function LinkCard({ title, description, link }) {
  return (
    <div className="link-card">
      <h3 className="link-title">{title}</h3>
      <p className="link-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="link-button">
        <HiOutlineExternalLink /> Visit here
      </a>
    </div>
  );
}

export default LinkCard;