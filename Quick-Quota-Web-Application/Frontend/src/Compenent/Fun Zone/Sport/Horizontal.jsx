import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import s1 from './s1.jpg'
import s2 from './s2.jpg'
import s3 from './s3.jpg'
import s4 from './s4.jpg'
import s5 from './s5.jpg'
import s6 from './s6.jpg'
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
          <img src={s1} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> CRICKET </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={s2} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> FOOTBALL </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={s3} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> BASKETBALL </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={s4} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> CHESS </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={s5} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> SWIMMING </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={s6} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> CARROM </h1>
             <button className='Cbtn'><Link to= "https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV">Watch Now</Link></button> 
          </div>
        </div>


        

         
      

        </Carousel>;
        
        
       
   </div>
  )
}
