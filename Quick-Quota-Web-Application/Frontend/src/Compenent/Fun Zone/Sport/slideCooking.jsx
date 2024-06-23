
import React from 'react';
import Slideshow from '../Slideshow';
import Sp2 from './Sp2.jpg';
import Sp1 from './Sp1.jpg';
import Sp3 from './Sp3.jpg'


function SlideCooking() {
  const images = [
    Sp2,
    Sp1,
    Sp3,

  ];

  return (
    <div className="App">
      <div className='Slide-Overlay'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;