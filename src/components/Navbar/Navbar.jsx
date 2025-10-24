// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          KUDIMI GUNASEKHAR
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/education" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Education
            </NavLink>
          </li>
          <li className="nav-item nav-dropdown"
              onMouseEnter={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
          >
            <span className="nav-link">More</span>
            {showMore && (
              <ul className="dropdown-menu">
                <li><a href="https://github.com/GUNASEKHAR5" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/guna-sekhar-kudimi-97b3b5326" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://leetcode.com/u/GUNASEKHARKUDIMI/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;