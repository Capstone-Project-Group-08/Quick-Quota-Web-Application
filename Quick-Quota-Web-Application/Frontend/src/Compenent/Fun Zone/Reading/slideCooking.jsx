import React from 'react';
import Slideshow from '../Slideshow';
import R01 from './R01.jpeg';
import R02 from './R02.jpg';
import R03 from './R03.jpg'


function SlideCooking() {
  const images = [
    R01,
    R02,
    R03,

  ];

  return (
    <div className="App">
      <div className='Slide-OverlayR'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;
