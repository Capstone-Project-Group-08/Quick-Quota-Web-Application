import React from 'react';
import Slideshow from '../Slideshow';
import Cook2 from './Cook2.jpg';
import Cook1 from './Cook1.jpg';
import Cook3 from './Cook3.jpg';


function SlideCooking() {
  const images = [
    Cook1,
    Cook2,
    Cook3,

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
