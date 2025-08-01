import React, { useState } from "react";
import "./Section1.css";

import images from '../../assets/images/flower.jpg'
const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="main">
      <div className="navbar" >
        <div className="brand">
          Kingsukh
          <br />
          Guest House
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#sec1">Home</a>
          <a href="#sec2">About</a>
          <a href="#service">Services</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="book-now">
          <a href="https://wa.me/9007062180" target="_self">
            <button>BOOK NOW</button>
          </a>
          
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="close-btn" onClick={toggleMenu}>
            ✖
          </div>
          <div className="mobile-links">
            <a href="#sec1">Home</a>
            <a href="#sec2">About</a>
            <a href="#service">Services</a>
            <a href="#rooms">Rooms</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}

      <div className="hero-text" id="sec1" >
        <p>Simple – Unique – Friendly</p>
        <h1>Make Yourself At Home</h1>
        <h1>
          In Our <span className="highlight">Guest House</span>.
        </h1>
      </div>
       <div className="book-now1">
          <a href="https://wa.me/9007062180" target="_self">
            <button>BOOK NOW</button>
          </a>
        </div>
    </div>
  );
};

export default Section1;
