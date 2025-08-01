import React from 'react'
import "./Section8.css"
const Section8 = () => {
  return (
    <div className="map-container">
      
      <iframe
        title="Kingsukh Guest House Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.239840489748!2d86.85721551135906!3d23.58633239446004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1722238011260!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Section8
