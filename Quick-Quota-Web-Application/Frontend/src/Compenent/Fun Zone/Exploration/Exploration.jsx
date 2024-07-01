import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Exploration.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';


export default function () {
  return (
    <div className='MainBGEX'>

        <Navbar/>
        <SlideCooking/>
        <div className='EX1'>
          <h1>EXPLORATION</h1>
        </div>

        <div className='EXL'>
        <p>
        Dive into the unknown and discover new horizons with exploration. Whether<br></br>
        it's exploring nature trails or diving into new cultures,<br></br>
        exploration opens doors to endless possibilities.
         
        </p>
        </div>

        <div className='EXL2'>
          <p>
          Explore an exciting array of hobby videos curated just for you. <br></br>
               Dive in and discover your next passion today.
          </p>
            
          
        </div>
        
        <Horizontal/> 
    </div>
  )
}

