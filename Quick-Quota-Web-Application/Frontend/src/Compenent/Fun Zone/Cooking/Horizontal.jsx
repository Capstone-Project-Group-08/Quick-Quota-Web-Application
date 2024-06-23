import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hor2 from './hor2.jpg'
import hor from './hor.jpg'
import c2 from './c2.jpg';
import c4 from './c4.jpg';
import c5 from './c5.jpg';
import c6 from './c6.jpg';
import c8 from './c8.jpg';
import c9 from './c9.jpg'
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
          <img src={c5} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> NOODLES </h1>
             <button className='Cbtn'><Link to= "https://youtube.com/playlist?list=PLFhw-Rie62rRre13x88B7867SnEhlquwx&si=FZTzcB2ZPLTJay49">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={c8} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> PIZZA </h1>
             <button className='Cbtn'><Link to= "https://youtube.com/playlist?list=PLzBLSHFaUJ4solQQfGvq9901spFwJvA_N&si=uwjRUr84fUu94NJA">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={c6} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> DESSERT </h1>
             <button className='Cbtn'><Link to= "https://youtube.com/playlist?list=PLFhw-Rie62rQN0O1a8hqTCFAJSOZgPZC-&si=IgHBvtgNhMYJRyHw ">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={c9} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> SANDWICH </h1>
             <button className='Cbtn'><Link to= "https://youtube.com/playlist?list=PLzufXz-w6SqNRcu8ccQ-blZVcBXu1w9XS&si=LuQt0byphE6ORiwV ">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={c2} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> BBQ </h1>
             <button className='Cbtn'><Link to= "https://youtube.com/playlist?list=PL4E8132BB10137FFA&si=Q8had2VS5_d-4Y3B">Watch Now</Link></button> 
          </div>
        </div>


        <div className='carousel-item'> 
          <img src={c4} alt="" className='Hori'/>
          <div className='image-text'>
             <h1> BIRYANI </h1>
             <button className='Cbtn'><Link to= "https://youtube.com/playlist?list=PLSx31_4437a2m87R4u5pBNi96vMltDxyy&si=M4Guw5VIM9epZEXe ">Watch Now</Link></button> 
          </div>
        </div>

        </Carousel>;     
   </div>
  )
}
