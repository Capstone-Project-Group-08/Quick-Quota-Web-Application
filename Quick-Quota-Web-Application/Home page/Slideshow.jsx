// Slideshow.js
import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="slideshow">
      <img src={images[index]} alt={`Slide ${index}`} />
    </div>
  );
};

export default Slideshow;
