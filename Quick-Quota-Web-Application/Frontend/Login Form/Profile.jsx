import React from 'react'
import Logo1 from './Logo1.png';
import './Profile.css';
import IconP1 from './IconP1.png'
import IconP2 from './IconP2.png'
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className='Pmain'>
        <div className="Profile">

          <div className='Check-p'>
            <h4 className='Check-h4'>Check Your<br></br> Progress</h4>
            <Link to = "/Check your Progress"> <img src={IconP1} alt="" className='IconP1'/></Link>
            
          </div>

        <img src={Logo1} alt="" className='LogoF'/>

               <div className='Title'>
                <h1 className='PR-h1'>Quick Quota</h1>
               </div>

               <div className='Check-p2'>
                <h5 className='Check-h5'>Log Out</h5>
                <img src={IconP2} alt="" className='IconP2'/>

               </div>
        </div> 
    </div>
  )
}