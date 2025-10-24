// src/sections/Contact/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="placeholder-text">
        I'm always open to discussing new projects, creative ideas, or 
        opportunities to be part of your visions.
      </p>
      
      <a href="mailto:your-email@example.com" className="contact-email-btn">
        Say Hello
      </a>
      {/* You can add a full contact form here later */}
    </section>
  );
}

export default Contact;