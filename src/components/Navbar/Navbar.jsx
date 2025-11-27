import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css'; // No longer needed

function Navbar() {
  
  // Helper to keep the code clean: defines the styles for standard menu links
  const navLinkClass = ({ isActive }) => 
    `block h-[80px] leading-[80px] px-4 text-[var(--secondary-text)] transition-colors duration-300 hover:text-[var(--primary-text)] ${
      isActive ? "text-[var(--primary-text)] font-medium" : ""
    }`;

  return (
    <nav className="sticky top-0 z-[999] h-[80px] flex justify-center items-center bg-[rgba(15,16,20,0.8)] backdrop-blur-[10px] border-b border-[var(--card-background)] text-[1.1rem]">
      <div className="flex justify-between items-center w-full max-w-[1100px] px-8">
        
        {/* Logo */}
        <NavLink 
          to="/Portfolio" 
          className="text-[1.5rem] font-bold text-[var(--primary-text)] cursor-pointer" 
          end
        >
          KUDIMI GUNASEKHAR
        </NavLink>

        {/* Menu */}
        <ul className="flex list-none m-0 p-0 text-center">
          <li className="relative">
            <NavLink to="/Portfolio" className={navLinkClass} end>
              Home
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/Portfolio/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/Portfolio/skills" className={navLinkClass}>
              Skills
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/Portfolio/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/Portfolio/education" className={navLinkClass}>
              Education
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="/Portfolio/more" className={navLinkClass}>
              More
            </NavLink>
          </li>
          <li className="relative">
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