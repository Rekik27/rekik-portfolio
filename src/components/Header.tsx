import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

// Header component does not require props, so we can use React.FC
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Rekik Mengstu</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
