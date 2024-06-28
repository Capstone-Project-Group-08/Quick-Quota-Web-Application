import React from 'react';
import Navbar from '../Nav bar/Navbar';
import Slideimage from './Slideimage';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <Slideimage />

      <h2 className='fadeIn'>Quick Quota</h2>
      <h3 className='H-h3'>Save Display Time Enjoy Life With Quick Quota</h3>

      <div className='MainH1'>
        <div className='Hp1'>
          <p>
            In a world where screens dominate our daily lives, finding a healthy balance
            can feel like an uphill battle. That's where Quick Quota comes in. We're here
            to help you reclaim control of your digital habits and rediscover the joy of a
            balanced lifestyle.
          </p>
        </div>

        <div className='Hp1'>
          <p>
            With Quick Quota, you'll gain valuable insights into your screen time habits,
            allowing you to make informed decisions about how you engage with
            technology. Whether you're a parent looking to set boundaries for your
            family or an individual seeking to regain focus and productivity, our intuitive
            platform provides the tools and support you need to succeed.
          </p>
        </div>
      </div>

      <div className='MainH2'>
        <div className='Hp2'>
          <p>
            But Quick Quota is more than just a screen time tracker. It's a community of
            like-minded individuals committed to promoting healthier digital habits and
            supporting each other on the journey towards a more mindful relationship
            with technology. From personalized recommendations to powerful parental
            controls, Quick Quota empowers you to live your best digital life,
            on your terms.
          </p>
        </div>

        <div className='Hp2'>
          <p>
            So why wait? Join the Quick Quota community today and take the first step
            towards a happier, healthier relationship with technology. Together, we'll
            unlock the full potential of your digital experience and embrace a life of
            balance and well-being.
          </p>
        </div>
      </div>

      <footer className='Footer-Main'>
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
          <p>&copy; Copyright Quick Quota. All rights reserved<br/>
             Designed by TEAM Quick Quota
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
