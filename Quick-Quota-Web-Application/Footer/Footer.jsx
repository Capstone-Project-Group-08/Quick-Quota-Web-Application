import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Footer() {
  return (
    <footer>
      <div className='container'> 
        <div className='footer-content'>
          <h3 className='H3'>Contact Us</h3>
          <p>Email: quickquota@gmail.com</p>
          <p>Phone: +94711234567</p>
          <p>Address: Colombo, Sri Lanka</p>
        </div>

        <div className='footer-content'>
          <h3 className='H3'>Follow Us</h3>
          <ul className='social-icon'>
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>   
      </div>
      <div className='footer-bar'>
        <p>&copy;Copyright Quick Quota.All rights reserved<br></br>
                 Designed by TEAM Quick Quota
        </p>
      </div>
    </footer>
  );
}
