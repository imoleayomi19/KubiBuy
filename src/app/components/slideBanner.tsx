
"use client";
import React, { useState, useEffect, useRef } from "react";
import "../styles/slideBanner.css";

const images = [
  "/images/slide-1.jpg",
  "/images/slide-2.jpg",
  "/images/slide-3.jpg",
  "/images/slide-4.jpg",
  "/images/slide-5.jpg",
];

const SlideBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsSliding(false);
      }, 500); // Duration of slide animation
    }, 2000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="slide-banner">
      <div
        className={`slide-img-wrapper${isSliding ? " sliding" : ""}`}
        style={{
          display: "flex",
          transition: isSliding ? "transform 0.5s ease-in-out" : "none",
          transform: isSliding ? "translateX(-100%)" : "translateX(0)",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: "500",
            height: "500",
          }}
        />
      </div>
      <div
        className="slide-indicators"
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            style={{
              height: 10,
              width: 10,
              borderRadius: "50%",
              background: idx === currentIndex ? "#333" : "#ccc",
              margin: "0 4px",
              display: "inline-block",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;


// "use client";
// import React, { useState, useEffect } from "react";
// import "../styles/slideBanner.css";

// const images = [
//   "/images/slide-1.jpg",
//   "/images/slide-2.jpg",
//   "/images/slide-3.jpg",
//   "/images/slide-4.jpg",
//   "/images/slide-5.jpg",
// ];

// const SlideBanner: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="slide-banner">
//       <img
//         height={500}
//         width={500}
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//       />
//       <div
//         className="slide-indicators"
//         style={{ display: "flex", justifyContent: "center", marginTop: 8 }}
//       >
//         {images.map((_, idx) => (
//           <span
//             key={idx}
//             style={{
//               height: 10,
//               width: 10,
//               borderRadius: "50%",
//               background: idx === currentIndex ? "#333" : "#ccc",
//               margin: "0 4px",
//               display: "inline-block",
//               transition: "background 0.3s",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SlideBanner;
