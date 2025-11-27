import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  
  const navLinkClass = ({ isActive }) => 
    `block h-[80px] leading-[80px] px-4 whitespace-nowrap transition-colors duration-300 hover:text-[var(--primary-text)] ${
      isActive 
        ? "text-[var(--primary-text)] font-bold"
        : "text-[var(--secondary-text)]"
    }`;

  return (
    <nav className="sticky top-0 z-[999] h-[80px] flex justify-center items-center bg-[rgba(15,16,20,0.8)] backdrop-blur-[10px] border-b border-[var(--card-background)] text-[1.1rem]">
      <div className="flex justify-between items-center w-full max-w-[1100px] px-4 lg:px-8 overflow-x-auto scrollbar-hide">
        
        <NavLink 
          to="/Portfolio" 
          className="hidden md:block text-[1.5rem] font-bold text-[var(--primary-text)] cursor-pointer mr-8 shrink-0" 
          end
        >
          KUDIMI GUNASEKHAR
        </NavLink>

        <ul className="flex list-none m-0 p-0 text-center mx-auto md:mx-0">
          <li>
            <NavLink to="/Portfolio" className={navLinkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/skills" className={navLinkClass}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/education" className={navLinkClass}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/more" className={navLinkClass}>
              More
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;