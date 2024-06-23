import React from 'react'
import Navbar from '../../Nav bar/Navbar';
import './Cooking.css';
import SlideCooking from './slideCooking';
import Horizontal from './Horizontal';
import FooterL from '../../Footer/FooterL';




export default function Cooking() {
  return (
    <div className='MainBGC'>
        <Navbar/>
        <SlideCooking/>

        <div className='Ch1'>
          <h1>COOKING</h1>
        </div>

        <div className='CookL'>
        <p>
          
            Embark on a culinary journey and discover the joy of cooking.From mastering<br></br>
            basic recipes to experimenting with flavors and cuisines,cooking is a <br></br>
            rewarding hobby that satisfies both the palate and the soul.
         
        </p>
        </div>

        <div className='CookL2'>
          <p>
            
               Explore an exciting array of hobby videos curated just for you. <br></br>
               Dive in and discover your next passion today.
            
          </p>
            
          
        </div>

        <Horizontal/> 
       
        <FooterL/>
    </div>
  )
}
