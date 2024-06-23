import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cr1 from './cr1.jpg'
import cr2 from './cr2.jpg'
import cr3 from './cr3.jpg'
import cr4 from './cr4.jpg'
import cr5 from './cr5.jpg'
import cr6 from './cr6.jpg'
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
          <img src={cr1} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> POTTERY </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={cr2} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> WOODWORKING </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={cr3} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> CANDLE MAKING  </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={cr4} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> SEWING  </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={cr5} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> SCRAPBOOKING  </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={cr6} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> KNITTING  </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>

        </Carousel>;
        
        
       
   </div>
  )
}
