// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const images = [
//   "/images/guesthouse.jpg",
//   "/images/hills.jpg",
//   "/images/room1.jpg",
//   "/images/road-red-trees.jpg",
//   "/images/room2.jpg",
//   "/images/sunset-mountain.jpg",
//   "/images/living-room.jpg",
//   "/images/road-orange-trees.jpg",
//   "/images/room3.jpg",
//   "/images/dam.jpg",
// ];

// const Section6= () => {
//   return (
//     <Container className="py-4">
//       <h2 className="text-center fw-bold mb-4 position-relative">
//         GALLARY
//         <div
//           style={{
//             height: "3px",
//             width: "60px",
//             backgroundColor: "#e83e8c",
//             margin: "0 auto",
//             marginTop: "8px",
//           }}
//         />
//       </h2>

//       <Row xs={2} md={3} className="g-2">
//         {images.map((src, idx) => (
//           <Col key={idx}>
//             <img
//               src={src}
//               alt={`gallery-${idx}`}
//               className="img-fluid rounded"
//               style={{ width: "100%", height: "auto", objectFit: "cover" }}
//             />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Section6;
import React from 'react'
import "./Section6.css"; 

const images = [
  "/images/1.jpg",
  "/images/hills.jpg",
  "/images/room1.jpg",
  "/images/road-red-trees.jpg",
  "/images/room2.jpg",
  "/images/sunset-mountain.jpg",
  "/images/living-room.jpg",
  "/images/road-orange-trees.jpg",
  "/images/room3.jpg",
  "/images/dam.jpg",
];


const Section6 = () => {
  return (
     <div className="gallery-container">
      
      <h2 className="gallery-title">GALLARY</h2>
     
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`gallery-${index}`} className="gallery-image" />
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Section6
