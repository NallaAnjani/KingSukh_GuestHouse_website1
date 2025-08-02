import React, { useState } from "react";
import "./Section1.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);
  return (
    <div className="main">
      <div className="navbar">
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

      {isOpen && (
        <div className="mobile-menu">
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

      <div className="hero-text" id="sec1">
        <p data-aos="fade-down" data-aos-delay="0">
          Simple – Unique – Friendly
        </p>

        <h1 data-aos="fade-down" data-aos-delay="200">
          Make Yourself At Home
        </h1>

        <h1 data-aos="fade-down" data-aos-delay="400">
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
