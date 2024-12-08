
import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logos.png" alt="Logo" />
        {/* <span>Namrata <strong>Universal</strong></span> */}
      </div>
      <div className="menu">
        <a href="#home">HOME</a>
        <a href="#internship">INTERNSHIP</a>
        <div className="dropdown">
          <a href="#training">TRAINING & DEVELOPMENT</a>
          <div className="dropdown-content">
            <a href="#option1">Option 1</a>
            <a href="#option2">Option 2</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#pages">PAGES</a>
          <div className="dropdown-content">
            <a href="#page1">Page 1</a>
            <a href="#page2">Page 2</a>
          </div>
        </div>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
        <a href="#blog">BLOG</a>
        <a href="#pay">PAY</a>
      </div>
    </div>
  );
}

export default Navbar;
