import React from 'react';
import Slideshow from '../Slideshow';
import Ex01 from './Ex01.jpg';
import Ex02 from './Ex02.jpg';
import Ex03 from './Ex03.jpg';



function SlideCooking() {
  const images = [
    Ex01,
    Ex02,
    Ex03,

  ];

  return (
    <div className="App">
      <div className='Slide-OverlayExp'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;
