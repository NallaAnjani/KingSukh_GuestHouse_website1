import React from "react";

import { FaHeart } from "react-icons/fa";
import { LuPaintBucket } from 'react-icons/lu';
import { RiShieldStarLine } from 'react-icons/ri';

import "./Section3.css";

const Section3 = () => {
  return (
    <section className="section3" id ="rooms">
      <p className="subtitle">OUR LIVING ROOM</p>
      <h2 className="title">The Most Memorable Rest Time Starts Here.</h2>
      <div className="card-wrapper">
    
        <div className="room-card"  data-aos="fade-up">
          <div className="image-wrapper">
            <img src="https://www.kingsukhguesthouse.com/assets/small.jpg" alt="Cozy Haven Room" />
            <div className="icon-group">
              <span><FaHeart style={{color:"#ea5184"}}/></span>
              <span><LuPaintBucket style={{color:"#cb51eaff"}}/></span>
              <span><RiShieldStarLine style={{color:"#4ebddfff"}}/></span> 
            </div>
          </div>
          <div className="room-info">
            <h3>Cozy Haven Room</h3>
            <p>
              Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
            </p>
            <p>
              Starting from <strong>Rs. 1000/night</strong>
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_self"
              rel="noopener noreferrer"
              className="book-btn"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        
        <div className="room-card"  data-aos="fade-up">
          <div className="image-wrapper">
            <img src="https://www.kingsukhguesthouse.com/assets/large.jpg" alt="Spacious Serenity Suite" />
            <div className="icon-group">
              <FaHeart style={{color:"#ea5184"}}/>
              < LuPaintBucket style={{color:"#cb51eaff"}}/>
              < RiShieldStarLine style={{color:"#4ebddfff"}}/>
            </div>
          </div>
          <div className="room-info">
            <h3>Spacious Serenity Suite</h3>
            <p>
              Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
            </p>
            <p>
              Starting from <strong>Rs. 1500/night</strong>
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_self"
              rel="noopener noreferrer"
              className="book-btn"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
