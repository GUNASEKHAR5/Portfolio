import React from 'react';
import LinkCard from '../../components/LinkCard/LinkCard';

const links = [
  {
    title: "LinkedIn",
    description: "My Social media to connect and share knowledge.",
    link: "https://linkedin.com/in/guna-sekhar-kudimi-97b3b5326" 
  },
  {
    title: "Github",
    description: "See all projects and daily progression on my github.",
    link: "https://github.com/GUNASEKHAR5"
  },
  {
    title: "LeetCode",
    description: "I write codes on a daily basis and I have solved 50+ problems of DSA.",
    link: "https://leetcode.com/u/GUNASEKHARKUDIMI/"
  }
];

function More() {
  return (
    <section className="py-24" id="more">
      <span className="bg-[var(--card-background)] text-[var(--primary-text)] px-3 py-1 rounded-xl text-sm font-medium">
        More
      </span>
      
      <h2 className="text-[2.5rem] font-bold mt-4 mb-8 relative after:content-[''] after:block after:w-[70px] after:h-[4px] after:bg-[var(--accent-color)] after:mt-2 after:rounded-[2px]">
        More
      </h2>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {links.map((item) => (
          <LinkCard 
            key={item.title}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default More;