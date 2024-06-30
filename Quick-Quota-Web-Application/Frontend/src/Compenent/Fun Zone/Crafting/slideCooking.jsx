import React from 'react';
import Slideshow from '../Slideshow';
import Cr01 from './Cr01.jpg';
import Cr02 from './Cr02.jpg';
import Cr03 from './Cr03.jpg'


function SlideCooking() {
  const images = [
    Cr01,
    Cr02,
    Cr03,

  ];

  return (
    <div className="App">
      <div className='Slide-OverlayCrafting'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;
