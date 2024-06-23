import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import p4 from './p4.jpg'
import p5 from './p5.jpg'
import p6 from './p6.jpg'
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
         <img src={p1} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> PHOTOGRAPHY </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button>
          </div>
          
         </div>

         <div className='carousel-item'> 
         <img src={p2} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> PHOTOGRAPHY </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button>
          </div>
          
         </div>

         <div className='carousel-item'> 
         <img src={p3} alt="" className='Hori'/>
          <div className='image-text'>
          
            <h1>  PHOTOGRAPHY </h1>
            <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button>
        
          </div>
          
         </div>

         <div className='carousel-item'> 
         <img src={p4} alt="" className='Hori'/>
          <div className='image-text'>
           
             <h1>  PHOTOGRAPHY </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button>

         
          </div>
          
         </div>

         <div className='carousel-item'> 
         <img src={p5} alt="" className='Hori'/>
          <div className='image-text'>
             <h1>  PHOTOGRAPHY </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button>
          </div>
          
         </div>

         <div className='carousel-item'> 
         <img src={p6} alt="" className='Hori'/>
          <div className='image-text'>
             <h1>  PHOTOGRAPHY </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button>
          </div>
          
         </div>
        </Carousel>;
        
        
       
   </div>
  )
}
