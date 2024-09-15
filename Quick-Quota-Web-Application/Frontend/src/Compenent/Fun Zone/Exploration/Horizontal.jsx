import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import e1 from './e1.jpg'
import e2 from './e2.jpg'
import e3 from './e3.jpg'
import e4 from './e4.jpg'
import e5 from './e5.jpg'
import e6 from './e6.jpg'
import '../Horizontal.css';
import { Link } from 'react-router-dom';

export default function Horizontal() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      
          
  return (
    <div  className='Hori-M'>
        <Carousel
        responsive={responsive}
        autoPlay={true} // Enable auto play
        autoPlaySpeed={3000} // Set auto play speed in milliseconds
        infinite={true}
        >
   
    
   <div className='carousel-item'> 
          <img src={e1} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> SCIENTIFIC</h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={e2} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> GEOGRAPHICAL </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={e3} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> VIRTUAL </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={e4} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> HISTORICAL  </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={e5} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> SPACE </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={e6} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> STAR PATTERNS </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>

        </Carousel>;
        
        
       
   </div>
  )
}
