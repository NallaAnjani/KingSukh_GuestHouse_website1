import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className="section2-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
          alt="Guest House"
        />
      </div>
      <div className="section2-content">
        <p className="section2-subtitle">ABOUT US</p>
        <h1 className="section2-title">
          The Best Holidays Start <br />
          Here!
        </h1>
        <p className="section2-description">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
          the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
          Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
          captivating Panchat Dam. Revel in the embrace of comfort, relish
          delightful meals, and unwind in our verdant garden oasis. Your ideal
          retreat beckons, promising a harmonious blend of nature's beauty and
          heartfelt hospitality. Explore the hidden gems of Purulia, creating
          memories that linger long after your stay.
        </p>
        <p className="section2-address">
          <a
            href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5863373,86.8572101,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_self"
           
          >
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </a>

          <br />
          <span className="phone_num">
            Contact us:
            <a href="tel:+919007062180">+91 9007062180</a>
          </span>
        </p>
        <button className="section2-button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Section2;
