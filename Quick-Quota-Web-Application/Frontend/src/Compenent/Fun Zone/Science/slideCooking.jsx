import React from 'react';
import Slideshow from '../Slideshow';
import Sc01 from './Sc01.jpg';
import Sc02 from './Sc02.jpg';
import Sc03 from './Sc03.jpg'


function SlideCooking() {
  const images = [
    Sc01,
    Sc02,
    Sc03,

  ];

  return (
    <div className="App">
      <div className='Slide-OverlaySc'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;
