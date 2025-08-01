import React from "react";
import "./Section7.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const Section7 = () => {
  return (
    <div className="section7-wrapper" id ="contact">
      {/* White box - background form container */}
      <div className="white-box">
        <form className="form-content">
          <h2>Send a Message</h2>
          <div className="row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="row">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Mobile Number" />
          </div>
          <textarea placeholder="Write your message here..." />
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Pink box - contact info */}
     <div className="contact-card">
        <h2>Contact Info</h2>

      <div className="contact-item">
        <FaMapMarkerAlt className="icon1" />
        <p>
          Beside Barshal Water Tank,<br />
          Manpur, Barhanti,<br />
          West Bengal 723156
        </p>
      </div>

      <div className="contact-item">
        <FaEnvelope className="icon1" />
        <p>kkghosh0099@gmail.com</p>
      </div>

      <div className="contact-item">
        <FaPhone className="icon1" />
        <p>+91 9007062180</p>
      </div>

      <div className="social-icons">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
    </div>
    </div> 
   
   
      
     
  );
};

export default Section7;
