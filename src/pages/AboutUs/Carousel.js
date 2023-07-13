import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./Rectangle14.png";
import image2 from "./Rectangle15.png";
import image3 from "./pngegg.png";

const images = [
  {
    background: image2,
    description: "Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences",
    title: "Marcus Schleifer CEO",
    post:"CEO",
    photo: image1,
  },
  {
    background: image2,
    title: "Image 2",
    description: "Description for Image 2",
    post:"HOD",
    photo: image1,
  },
  // Add more image objects as needed
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          key={index}
          style={{ backgroundImage: `url(${image.background})` }}
        >
          <div className="carousel-content">
            <div className="description">
             
              <p>{image.description}</p>
              <h2>{image.title}</h2>
              <h4>{image.post}</h4>
            </div>
            <div className="photo">
              <img src={image.photo} alt={image.title} />
            </div>
          </div>
        </div>
      ))}
      <button className="prev" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
