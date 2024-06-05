 import React from "react";
 import'./Signin.css';
 import Logo2 from './Logo2.png';
 import { FaUser, FaLock } from "react-icons/fa";

 const LoginForm =()=>{
    return(

        <div className="wrapper">

         
  
            <div className="side-001">
                <form action="">
                   <h1>Welcome Back!</h1>

                   <div className="input-box">
                      <input type = "Username" placeholder ='Continue with Google' readOnly  required className="user"/>
                      
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
                      <lable><input type = "checkbox" />I agree with terms and condition</lable>
                    </div>

                     <button type="submit">Create Account</button>
    
                </form>
            </div> 

            
          
            <div className="side-002">

                <div className="Double">
                    <p>
                       Welcom back to your<br></br>
                       digital oasis-Login to<br></br>
                       Continue your journey
                    </p>

                       <button type="submit" className="loginbutton">Login</button>
                </div> 

                <img src={Logo2} alt="" className='Logo2'/>

            </div>  
        </div>

    );
 };

 export default LoginForm;
   