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
          <a
            href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5863373,86.8572101,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_self"
           >
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </a>
         
          <p>kkghosh0099@gmail.com</p>
          <a href="tel:+919007062180" style={{textDecoration:"none",color:"#888"}}>+91 9007062180</a>
          <div className="social-icons1">
            <a href="#"><FaFacebook /></a>
            <a href="https://www.instagram.com/kingsukhguesthouse/"><FaInstagram /></a>
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
