import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Crafting.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';


export default function () {
  return (
    <div className='MainBGCR'>

        <Navbar/>
        <SlideCooking/>
        <div className='Cr1'>
          <h1>CRAFTING</h1>
        </div>

        <div className='CrL'>
        <p>
            Get creative and craft your way to relaxation and fulfillment. Whether it's knitting,<br></br>
            painting, or DIY projects, crafting allows you to unleash your imagination<br></br>
            and create something beautiful with your own hands.
         
        </p>
        </div>

        <div className='CrL2'>
          <p>
          Explore an exciting array of hobby videos curated just for you. <br></br>
               Dive in and discover your next passion today.
          </p>
            
          
        </div>
        
        <Horizontal/> 
    </div>
  )
}
