import React from 'react';
import './Education.css';
import EducationCard from '../../components/EducationCard/EducationCard';

const educationData = [
  {
    school: "College of Engineering Guindy, Anna University",
    degree: "Bachelor of Technology in Information Technology",
    details: "Current CGPA: 8.55",
    location: "Chennai, TamilNadu, India",
    date: "Aug. 2023 – Expected May 2027"
  },
  {
    school: "Sri Surya Junior College (Intermediate)",
    degree: "M.P.C",
    details: "Percentage: 98.9%",
    location: "Nagari, AndhraPradesh, India",
    date: "Aug. 2021 – May 2023"
  },
  {
    school: "Sri Saraswathi Vignana Mandir",
    degree: "Secondary School Certificate",
    details: "Percentage: 100%",
    location: "Nagari, AndhraPradesh, India",
    date: "Aug. 2010 – May 2021"
  }
];

function Education() {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      
      <div className="education-list">
        {educationData.map((edu) => (
          <EducationCard 
            key={edu.school}
            school={edu.school}
            degree={edu.degree}
            details={edu.details}
            location={edu.location}
            date={edu.date}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;