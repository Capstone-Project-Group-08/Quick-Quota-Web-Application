import React from 'react'
import Logo1 from './Logo1.png';
import './ForgotPassword.css';
import {  FaLock} from "react-icons/fa";

export default function ForgotPassword() {
  return (
    <div className='Fmain'>
        <div className="forgot">

        <img src={Logo1} alt="" className='LogoF'/>

               <form action="">
                  <div className="input-box1">
                     <input type = "Username" placeholder ='Email' required className="user"/>
                   </div>


                   <div className="input-box1">
                     <input type = "Username" placeholder ='New Password' required className="user"/>
                     <FaLock className="iconF" />
                   </div>

                   <div className="input-box1">
                     <input type = "Username" placeholder ='Confirm Password' required className="user"/>
                     <FaLock className="iconF" />
                   </div>

                   

                    <button type="submit">Submit</button>
   
               </form>
        </div> 
    </div>
  )
}
