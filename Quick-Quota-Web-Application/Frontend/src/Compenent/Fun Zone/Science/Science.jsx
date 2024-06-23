import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Science.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';


export default function () {
  return (
    <div className='MainBGSC'>

        <Navbar/>
        <SlideCooking/>
        <div className='Sc1'>
          <h1>SCIENCE</h1>
        </div>

        <div className='ScL'>
        <p>        
            Dive into the fascinating world of science and explore the wonders of the universe. <br></br>
            Whether it's conducting experiments at home or learning about the<br></br>
            latest scientific discoveries, science offers endless <br></br>
            opportunities for curiosity and learning.
        </p>
        </div>

        <div className='ScL2'>
          <p>
          Explore an exciting array of hobby videos curated just for you. <br></br>
               Dive in and discover your next passion today.
          </p>
            
          
        </div>
        
        <Horizontal/> 
    </div>
  )
}
