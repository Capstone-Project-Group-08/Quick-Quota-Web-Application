import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Sport.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';

export default function Photography() {
  return (
    <div className='MainBGS'>
        <Navbar/>
        <SlideCooking/>
        
        <div className='Sh1'>
          <h1>SPORT</h1>
        </div>

        <div className='SportL'>
        <p>        
          Stay active and boost your well-being with sports. From team <br></br>
          games to solo activities, sports offer a fun and <br></br>
          engaging way to stay fit and healthy.
        </p>
        </div>

        <div className='SportL2'>
          <p>
          Explore an exciting array of hobby videos curated just for you. <br></br>
               Dive in and discover your next passion today.
          </p>
            
          
        </div>
       
        
        
        <Horizontal/> 

    </div>
  )
}
