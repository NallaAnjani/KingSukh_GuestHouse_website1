import React from "react";
import "./Section4.css";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineRoomService, MdRestaurant, MdMap } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";

const Section4 = () => {
  return (
    <div className="section4-bg" id ="service">
      <div className="section4-content">
        <p className="section4-subtitle">SERVICES</p>
        <h2 className="section4-title">Strive Only For The Best.</h2>

        <div className="section4-services">
          <div className="service-item" data-aos="fade-left" data-aos-delay="0">
            <div className="icon blue"><GrShieldSecurity/></div>
            <span>High Class Security</span>
          </div>
          <div className="service-item" data-aos="fade-left" data-aos-delay="100">
            <div className="icon pink"><MdOutlineRoomService /></div>
            <span>24 Hours Room Service</span>
          </div>
          <div className="service-item" data-aos="fade-left" data-aos-delay="200">
            <div className="icon purple"><MdRestaurant /></div>
            <span>Restaurant</span>
          </div>
          <div className="service-item" data-aos="fade-left" data-aos-duration="300">
            <div className="icon red"><MdMap /></div>
            <span>Tourist Guide Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
