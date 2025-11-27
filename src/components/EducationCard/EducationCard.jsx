import React from 'react';

function EducationCard({ school, degree, details, location, date }) {
  return (
    // Stack vertically on mobile (flex-col), row on desktop (md:flex-row)
    <div className="flex flex-col md:flex-row justify-between items-start py-6 border-b border-[var(--card-background)]">
      
      <div className="text-left mb-2 md:mb-0">
        <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-1">{school}</h3>
        <p className="text-base italic text-[var(--secondary-text)] mb-1">{degree}</p>
        <p className="text-sm text-[var(--secondary-text)]">{details}</p>
      </div>

      <div className="text-left md:text-right shrink-0 md:ml-4">
        <p className="text-base font-medium text-[var(--primary-text)] mb-1">{location}</p>
        <p className="text-sm text-[var(--secondary-text)]">{date}</p>
      </div>
      
    </div>
  );
}

export default EducationCard;