import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";

const HeroCarousel = ({ listings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // 'left' or 'right'

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listings.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === listings.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hero-carousel-container">
      <div className={`carousel-wrapper ${direction}`}>
        {listings.map((listing, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${listing.image})`,
            }}
          >
            <div className="carousel-overlay">
              <div className="carousel-details">
                <h2>{listing.title}</h2>
                <p>{listing.location}</p>
                <p className="price">{listing.price}/night</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={handlePrevious}>
          &#8249;
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
