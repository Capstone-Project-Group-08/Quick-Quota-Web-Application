import React from 'react';
import Slideshow from '../Slideshow';
import Ph02 from './Ph02.jpg';
import Ph01 from './Ph01.jpg';
import Ph03 from './Ph03.jpg';


function SlideCooking() {
  const images = [
    Ph02,
    Ph01,
    Ph03,

  ];

  return (
    <div className="App">
    <div className='Slide-OverlayPh'>
      
    </div>

    <Slideshow images={images} interval={2000} />
  </div>
  );
}

export default SlideCooking;
