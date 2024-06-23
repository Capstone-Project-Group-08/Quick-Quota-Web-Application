import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Photography.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';


export default function () {
  return (
    <div className='MainBGP'>

        <Navbar/>
        <SlideCooking/>
        <div className='Ph1'>
          <h1>PHOTOGRAPHY</h1>
        </div>

        <div className='PhL'>
        <p>
        Capture moments and tell stories through the lens of a camera. Whether you're<br></br>
        into landscapes, portraits, or street photography, photography is a creative<br></br>
        outlet that allows you to see the world from a unique perspective.


        </p>
        </div>

        <div className='PhL2'>
          <p>
            Explore an exciting array of hobby videos curated just for you. <br></br>
            Dive in and discover your next passion today.
          </p>
            
          
        </div>
        
        <Horizontal/> 
    </div>
  )
}
