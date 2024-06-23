import React from 'react'
import Navbar from '../Nav bar/Navbar';
import './Journey.css';
import Jp from './Jp.jpeg';
import FooterL from '../Footer/FooterL';

function Journey() {
  return (
    <div className='J-BG'>
    
      <Navbar/>
      

      <div className='Jh1'>
        <h1>OUR JOURNEY</h1>
      </div>

      <div className='Main'>
    

        <div className='Jp'>
          <p>
          At our core, we're a team of passionate individuals<br></br>
           driven by innovation and a relentless pursuit of <br></br>
           excellence. With a shared dedication to crafting <br></br>
            unforgettable experiences, we thrive on pushing Our<br></br>
             journey began with a simple idea: to create <br></br>
            something truly remarkable. Today, that vision<br></br>
             fuels every aspect of our work as we strive to <br></br>
             exceed expectations and leave a lasting impact. <br></br>
             Welcome to our world, where creativity knows no <br></br>
             bounds, and possibilities are endless.
          </p>
        </div>
        <img src={Jp} alt="JP" className='Jpp'/>

      </div>
      <FooterL/>
    </div>

   
  )
}

export default Journey