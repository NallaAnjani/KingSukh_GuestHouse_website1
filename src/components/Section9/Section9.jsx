import React from "react";
import "./Section9.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";


const Section9 = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Kingsukh<br />Guest<br />House</h3>
          <p>
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your
            getaway truly extraordinary.
          </p>
          <button className="book-now2">BOOK NOW</button>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Browse Destinations</li>
            <li>Special Offers & Packages</li>
            <li>Room Types & Amenities</li>
            <li>Customer Reviews & Ratings</li>
            <li>Travel Tips & Guides</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p>kkghosh0099@gmail.com</p>
          <p>+91 9007062180</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
};

export default Section9;
