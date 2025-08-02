


import React from 'react';
import './Section6.css';
import img1 from '../../assets/images/out.jpg';
import img2 from '../../assets/images/ayodhya.webp';
import img3 from '../../assets/images/large.jpg';
import img4 from '../../assets/images/palash.webp';
import img5 from '../../assets/images/small.jpg';

import img6 from '../../assets/images/baranti.webp';

import img7 from '../../assets/images/recep.jpg';
import img8 from '../../assets/images/flower.jpg';
import img9 from '../../assets/images/room1.jpg';
import img10 from '../../assets/images/mithonDam.webp';






const images = [
  { src: img1, area: 'img1' },
  { src: img2, area: 'img2' },
  { src: img3, area: 'img3' },
  { src: img4, area: 'img4' },
  { src: img5, area: 'img5' },
  { src: img6, area: 'img6' },
  { src: img7, area: 'img7' },
  { src: img8, area: 'img8' },
  { src: img9, area: 'img9' },
  { src: img10, area: 'img10' },
];

const Section6 = () => {
  return (
    <div className="gallery-wrapper" id = "gallery">  
      <h2 className="gallery-title" data-aos="fade-up"
     data-aos-duration="3000">Gallery</h2>
      <div className="image-grid">
        {images.map((img, index) => (
          <div className="image-item" style={{ gridArea: img.area }} key={index}>
            <img src={img.src} alt={`img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section6;







