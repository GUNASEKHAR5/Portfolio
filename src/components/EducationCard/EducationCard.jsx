// src/components/EducationCard/EducationCard.js
import React from 'react';
import './EducationCard.css';

function EducationCard({ school, degree, details, location, date }) {
  return (
    <div className="education-card">
      <div className="education-left">
        <h3 className="education-school">{school}</h3>
        <p className="education-degree">{degree}</p>
        <p className="education-details">{details}</p>
      </div>
      <div className="education-right">
        <p className="education-location">{location}</p>
        <p className="education-date">{date}</p>
      </div>
    </div>
  );
}

export default EducationCard;