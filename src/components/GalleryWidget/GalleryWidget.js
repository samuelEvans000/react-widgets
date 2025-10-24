import React, { useState, useEffect } from "react";
import "./GalleryWidget.css";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "/images/img.jpg",
    "/images/img.jpg",
    "/images/img.jpg",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ensure we always have at least 3 images
  const ensureMinimumImages = (imageList) => {
    if (imageList.length < 3) {
      const defaultImage = "/images/img.jpg";
      const neededImages = 3 - imageList.length;
      return [...imageList, ...Array(neededImages).fill(defaultImage)];
    }
    return imageList;
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setImages((prev) => {
        const updatedImages = [newUrl, ...prev];
        return ensureMinimumImages(updatedImages);
      });
      setCurrentIndex(0); // Always show from the beginning when new image is added
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < images.length - 3 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Get the current images array ensuring minimum 3 images
  const currentImages = ensureMinimumImages(images);

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);


  return (
    <div className="gallery-widget">
      {/* Info Icon */}
      <img src="/images/info.png" alt="Info" className="info-icon" />
      
      {/* Drag Icon */}
      <img src="/images/drag.png" alt="Drag" className="drag-icon" />

      <div className="gallery-header">
        <button className="gallery-title">Gallery</button>

        <div className="gallery-actions">
          <label className="add-btn">
            <span className="plus-symbol">+</span>
            <span className="add-text">ADD IMAGE</span>
            <input type="file" accept="image/*" onChange={handleAddImage} hidden />
          </label>

          <div className="arrow-buttons">
            <button 
              onClick={scrollLeft} 
              className={`arrow-btn ${currentIndex === 0 ? 'disabled' : ''}`}
              disabled={currentIndex === 0}
            >
              <img src="/images/left.png" alt="Previous"/>
            </button>
            <button 
              onClick={scrollRight} 
              className={`arrow-btn ${currentIndex >= currentImages.length - 3 ? 'disabled' : ''}`}
              disabled={currentIndex >= currentImages.length - 3}
            >
              <img src="/images/right.png" alt="Next"/>
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <div 
          className="gallery-grid"
          style={{
            transform: `translateX(-${currentIndex * (100 / 9)}%)`,
            transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none'
          }}
        >
          {currentImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Gallery ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
