import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Music.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';


export default function () {
  return (
    <div className='MainBGM'>

        <Navbar/>
        <SlideCooking/>
        <div className='Mu1'>
          <h1>MUSIC</h1>
        </div>

        <div className='MusL'>
        <p>
          Unleash your creativity and express yourself through music. Whether you're<br></br>
          playing an instrument or singing along, music is a universal<br></br> 
          language that brings joy and connection. 
        </p>
        </div>

        <div className='MusL2'>
          <p>
            Explore an exciting array of hobby videos curated just for you. <br></br>
            Dive in and discover your next passion today.
          </p>
            
          
        </div>
        
        <Horizontal/> 
    </div>
  )
}
