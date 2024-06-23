// App.js
import React from 'react';
import Slideshow from './Slideshow';
import H1 from './H1.jpeg';
import H2 from './H2.jpg';
import H3 from './H3.jpeg'
import H4 from './H4.jpeg'

function SlideCooking() {
  const images = [
    H1,
    H2,
    H3,
    H4,

  ];

  return (
    <div className="App">
      <div className='Slide-Overlayy'>
        
      </div>
  
      <Slideshow images={images} interval={2000} />
    </div>
  );
}

export default SlideCooking;