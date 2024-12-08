// src/components/HeroImage.jsx
import React from 'react';
import './HeroImage.css';

function HeroImage() {
  return (
    <div className="hero-image-container">
      <video
        src="/video.mp4" 
        autoPlay 
        muted 
        loop 
        className="animated-hero-video"
      />
    </div>
  );
}

export default HeroImage;

