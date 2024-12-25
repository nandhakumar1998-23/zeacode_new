// src/components/Navbar.js
import React from 'react';
import './Navbar.css';  // If using a separate CSS file
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#shop">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
