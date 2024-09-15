import React from 'react'
import Navbar from '../Nav bar/Navbar';
import './Offerings.css';
import FooterL from '../Footer/FooterL';
import { Link } from "react-router-dom";

function Offerings() {
  return (
    <div className='O-BG'>

      <Navbar/>
        <div className='Oh1'>
           <h1>OFFERINGS</h1>
        </div>

       <h2 className='OFH2'>Welcome to Quick Quota!</h2>

          <p className='p1'>We're dedicated to helping you and your family to manage screen time effectively. Explore our offerings below.</p>


      <div className='OP1'>
        <div className='op1'>

          <h3>Insightful Reports</h3>
            
            <p> 
              Gain valuable insights into your screen time habits with our detailed 
              reports. Understand how you spend time on your devices and make
              informed decisions about your digital lifestyle.
            </p>
            
        </div>

        <div className='op1'>
          
          <h3>Powerful Parental Controls</h3>
            <p>
             Take control of your family's screen time with our advanced parental 
             control features. Set limits, block inappropriate content, 
             and create a safe online environment for your children.
             </p>
        </div>
      </div>


      <div className='OP2'>
        <div className='op2'>
           
          <h3>Easy-to-Use Interface</h3> 
            
            <p> 
            Our user-friendly interface makes it simple to navigate and customize
            settings according to your preferences. Get started in just a few
            clicks and take control of your digital experience.

            </p>
            
        </div>

        <div className='op2'>

          <h3>Explore New Hobbies</h3>
             
            <p>
            Looking to explore new hobbies and reduce screen time? Check out our curated
            list of hobbies with detailed guides on how to get started.
            </p>

          
        </div>
      </div>


      <button className='OFFBTN'>
        <Link to = "/Sign in">Get Start</Link>
      </button>
      <FooterL/>
      
    </div>
  )
}

export default Offerings