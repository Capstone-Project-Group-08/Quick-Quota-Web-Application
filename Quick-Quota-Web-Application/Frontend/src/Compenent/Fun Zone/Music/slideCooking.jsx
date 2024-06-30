import React from 'react';
import Slideshow from '../Slideshow';
import Mus2 from './Mus2.jpg';
import Mus1 from './Mus1.png';
import Mus3 from './Mus3.jpg';



function SlideCooking() {
  const images = [
    Mus2,
    Mus1,
    Mus3,

  ];

  return (
    <div className="App">
      <div className='Slide-OverlayMu'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;
