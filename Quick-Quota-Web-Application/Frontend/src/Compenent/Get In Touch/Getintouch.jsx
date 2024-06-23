import React from 'react'
import Navbar from '../Nav bar/Navbar';
import './Getintouch.css';
import FooterL from '../Footer/FooterL';
import { Link } from "react-router-dom";



function Getintouch() {
  return (
    <div className='G-BG'>
      <Navbar/>
      <div className='Gh1'>
        <h1>GET IN TOUCH</h1>
      </div>
      <div className='Gp'>
        <p>
        Have a question, suggestion, or just want to say hello? We'd love to hear from you! Our<br></br>
         dedicated team is here to assist you with anything you need. Whether it's a technical issue, a <br></br>
         product inquiry, or simply wanting to connect, don't hesitate to reach out. Your satisfaction is <br></br>
         our top priority, and we're committed to providing you with the best possible experience.
        </p>
      </div>


      <div className='Contact'>
        <div className='Get-In-Content'>
          <h3 className='HG'>Contact Us</h3>
          <p>Email: quickquota@gmail.com</p>
          <p>Phone: +94711234567</p>
          <p>Address: Colombo, Sri Lanka</p>
        </div>

        <div className='Get-In-Content'>
          <h3 className='HG'>Follow Us</h3>
          <ul className='social-iconG'>
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div> 
      </div>     

          <diV className= 'G-LinkM'>
            <Link className='G-Link' to = "/Add to Feedback">Add to Feedback</Link>
          </diV>

      <FooterL/>
    </div>
  )
}

export default Getintouch
