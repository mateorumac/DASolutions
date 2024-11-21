import React, { useState, useEffect } from "react";
import "./HeroCarousel.css";

const HeroCarousel = ({ listings }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? listings.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === listings.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="hero-carousel-container">
      <div
        className={`carousel-image ${
          isTransitioning ? "carousel-transition" : ""
        }`}
        style={{
          backgroundImage: `url(${listings[currentIndex].image})`,
        }}
      >
        <div className="carousel-overlay">
          <div className="carousel-details">
            <h2>{listings[currentIndex].title}</h2>
            <p>{listings[currentIndex].location}</p>
            <p className="price">{listings[currentIndex].price}/night</p>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
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
