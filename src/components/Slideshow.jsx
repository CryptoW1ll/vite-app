import React, { useState } from 'react';
import Button from './Button';

function Slideshow() {
  // List of image sources
  const images = ['logo192.png', 'logo193.png', 'logo194.png', 'NAV_Training.jpg', 'NAV_Training1.jpg', 'NAV_Training2.jpg', 'NAV_Training3.jpg','NAV_Training4.jpg' ];

  const [currentImage, setCurrentImage] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
  };

  // Function to go to the previous image
  const previousImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to the last image
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-3xl font-semibold">Images</h1>
      <img src={images[currentImage]} alt="Slideshow" className="w-64 h-auto" />
      <p>Image: {currentImage + 1}</p>
      <div className="flex space-x-4">
        <Button onClick={previousImage} label="Previous" className="previous-button" />
        <Button onClick={nextImage} label="Next" className="next-button" />
      </div>
    </div>
  );
}

export default Slideshow;
