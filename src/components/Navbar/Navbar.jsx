import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

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
          <li className="nav-item">
            <NavLink to="/more" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              More
            </NavLink>
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