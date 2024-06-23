import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Reading.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';


export default function () {
  return (
    <div className='MainBGR'>

        <Navbar/>
        <SlideCooking/>
        <div className='R1'>
          <h1>READING</h1>
        </div>

        <div className='RL'>
        <p>        
            Immerse yourself in the world of literature and let your imagination soar.<br></br>
            Whether it's fiction, non-fiction, or poetry, reading opens doors<br></br>
            to new perspectives, ideas, and adventures.
        </p>
        </div>

        <div className='RL2'>
          <p>
            Explore an exciting array of hobby videos curated just for you. <br></br>
            Dive in and discover your next passion today.
          </p>
            
          
        </div>
        
        <Horizontal/> 
    </div>
  )
}
