import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Gardening.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';


export default function () {
  return (
    <div className='MainBGG'>

        <Navbar/>
        <SlideCooking/>
        <div className='Ga1'>
          <h1>GARDENING</h1>
        </div>

        <div className='GaL'>
        <p>
            Connect with nature and cultivate your green thumb with gardening. From planting<br></br>
            flowers to growing your own vegetables, gardening offers a therapeutic<br></br>
            escape and a sense of accomplishment as you nurture and<br></br>
            watch your garden flourish. 
        </p>
        </div>

        <div className='GaL2'>
          <p>
          Explore an exciting array of hobby videos curated just for you. <br></br>
               Dive in and discover your next passion today.
            
          </p>
            
          
        </div>
        
        <Horizontal/> 
    </div>
  )
}
