import React from 'react';

function Contact() {
  return (
    <section className="py-24 min-h-[60vh] text-center" id="contact">
      <h2 className="section-title mx-auto w-fit after:left-0 after:right-0 after:mx-auto">
        Contact Me
      </h2>

      <p className="text-[var(--secondary-text)] text-[1.2rem] max-w-[600px] mx-auto my-6 leading-[1.7]">
        I'm always open to discussing new projects, creative ideas, or 
        opportunities to be part of your visions.
      </p>
      
      <a 
        href="mailto:kudimigunasekhar@gmail.com" 
        className="inline-block bg-[var(--accent-color)] text-[var(--primary-text)] px-8 py-3 rounded-lg font-medium text-[1.1rem] mt-6 transition-colors duration-300 hover:bg-[#2563eb]"
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact;