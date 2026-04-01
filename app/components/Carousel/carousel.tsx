// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import "./carousel.css";

// const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"]; // add your image paths in /public

// export default function Carousel() {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="carousel">
//       <div className="carousel-image-wrapper">
//         <Image
//           src={images[current]}
//           alt={`Slide ${current + 1}`}
//           fill
//           className="carousel-image"
//         />
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./carousel.css";

const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        <Image
          src={images[current]}
          alt={`Slide ${current + 1}`}
          fill
          className="carousel-image"
          priority
        />
      </div>
    </div>
  );
}
