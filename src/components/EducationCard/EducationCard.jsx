import React from 'react';
// import './EducationCard.css'; // No longer needed

function EducationCard({ school, degree, details, location, date }) {
  return (
    <div className="flex justify-between items-start py-6 border-b border-[var(--card-background)]">
      
      {/* Left Side: School Info */}
      <div className="text-left">
        <h3 className="text-xl font-semibold text-[var(--primary-text)] mb-1">
          {school}
        </h3>
        <p className="text-base italic text-[var(--secondary-text)] mb-1">
          {degree}
        </p>
        <p className="text-sm text-[var(--secondary-text)]">
          {details}
        </p>
      </div>

      {/* Right Side: Location & Date */}
      <div className="text-right shrink-0 ml-4">
        <p className="text-base font-medium text-[var(--primary-text)] mb-1">
          {location}
        </p>
        <p className="text-sm text-[var(--secondary-text)]">
          {date}
        </p>
      </div>
      
    </div>
  );
}

export default EducationCard;