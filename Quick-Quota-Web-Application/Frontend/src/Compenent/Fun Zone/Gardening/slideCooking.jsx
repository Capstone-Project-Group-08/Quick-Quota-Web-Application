import React from 'react';
import Slideshow from '../Slideshow';
import Gar01 from './Gar01.jpg';
import Gar02 from './Gra02.jpg';
import Gar03 from './Gra03.jpg'


function SlideCooking() {
  const images = [
    Gar01,
    Gar02,
    Gar03,

  ];

  return (
    <div className="App">
      <div className='Slide-OverlayGa'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;
