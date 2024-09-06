import React, { useRef, useState } from "react";
import "./RightBox2.css";

const RightBox2 = () => {
  const [images, setImages] = useState([]);
  const galleryRef = useRef(null); // Create a ref for the gallery

  const handleAddImage = () => {
    const newImage = `https://via.placeholder.com/300x319?text=New+Image+${
      images.length + 1
    }`;
    setImages([...images, newImage]);
  };

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="right-box2">
      {/* Gallery Header */}
      <div className="gallery-header">
        <span className="gallery-text">Gallery</span>
        <div className="button-container">
          <button className="add-image-button" onClick={handleAddImage}>
            Add Image
          </button>
          <div className="ellipse-container">
            <div className="ellipse-button" onClick={scrollLeft}></div>
            <div className="ellipse-button" onClick={scrollRight}></div>
          </div>
        </div>
      </div>

      {/* Gallery Images (Horizontally) */}
      <div className="gallery-images" ref={galleryRef}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>

      {/* Rectangle Elements */}
      <div className="Rectangle5121"></div>
    </div>
  );
};

export default RightBox2;
