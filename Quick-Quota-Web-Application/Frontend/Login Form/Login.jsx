import React from "react";
import'./Login.css';
import Logo1 from './Logo1.png';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm =()=>{
   return(

       <div className="wrapper">
 
        
         
           <div className="side-02">

               <div className="Double">
                   <p>
                      Unlock a world of<br></br>
                      possibilities with just a<br></br>
                      Click-sign in to embark<br></br>
                      on your digital journey<br></br>
                      today
                   </p>

                      <button type="submit" className="loginbutton">Sign In</button>

                      <img src={Logo1} alt="" className='Logo1'/>
               </div>      
           </div>  


           <div className="side-01">
               <form action="">
                  <h1>Welcome Back!</h1>

                  <div className="input-box">
                     <input type = "Username" placeholder ='Continue with Google' readOnly required className="user"/>
                   </div>


                   <div className="input-box">
                     <input type = "Username" placeholder ='Username' required className="user"/>
                     <FaUser className="icon" />
                   </div>

                   <div className="input-box">
                     <input type = "Username" placeholder ='Password' required className="user"/>
                     <FaLock className="icon" />
                   </div>

                   <div className="remember-forget">
                     <Link to = "/Forgot Password">Forgot Passwords</Link>
                   </div>

                    <button type="submit">Log In</button>
   
               </form>
           </div> 
       </div>

   );
};

export default LoginForm;
