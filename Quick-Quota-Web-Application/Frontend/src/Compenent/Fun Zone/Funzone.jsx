import React from 'react'
import Navbar from '../Nav bar/Navbar';
import './Funzone.css';
import { Link } from 'react-router-dom';
import FooterL from '../Footer/FooterL';


function Funzone() {
  return (
    <div className='F-BG'>
      <Navbar/>
        <div className='Fh1'>
          <h1>FUN ZONE</h1>
        </div>
        
        <div className='Fp'>
          <p>
      Unplug, unwind, and unlock a world of endless possibilities beyond the screen. Embrace the<br></br> 
      joy of outdoor adventures, the thrill of creative expression, and the camaraderie of shared <br></br>
      experiences. By choosing real-life connections over virtual distractions, you empower<br></br>
       children to discover their passions, nurture their talents, and forge meaningful connections<br></br>
        with the world around them. Let's inspire a generation to live fully, engage deeply, and <br></br>
        embrace the beauty of a balanced life. Together, we can break free from the grip of screen <br></br>
        time addiction and unlock the boundless potential within each child.
          </p>
       </div>

       <div className='Fbtn-container'>

      <button className='Fbtn'><Link to = "/Exploration"> Exploration </Link></button>
      <button className='Fbtn'><Link to = "/Sport"> Sport </Link></button>
      <button className='Fbtn'><Link to = "/Music"> Music </Link></button>
      <button className='Fbtn'><Link to = "/Crafting"> Crafting </Link></button>
      <button className='Fbtn'><Link to = "/Reading"> Reading </Link></button>
      <button className='Fbtn'><Link to = "/Gardening"> Gardening </Link></button>
      <button className='Fbtn'><Link to = "/Photograpy"> Photography </Link></button>
      <button className='Fbtn'><Link to = "/Science"> Science </Link></button>
      <button className='Fbtn'><Link to = "/Cooking"> Cooking </Link></button>
      
      </div>
      
      <FooterL/>
      
    </div>
  )
}

export default Funzone