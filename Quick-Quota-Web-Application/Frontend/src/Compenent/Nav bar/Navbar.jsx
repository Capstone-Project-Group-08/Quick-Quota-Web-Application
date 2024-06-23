import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const  Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <Link to="/"><img src={logo} alt="" className="logo" /></Link>

      

      <div className={`nav-side ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Offerings">Offerings</Link></li>
          <li><Link to="/Fun Zone">Fun Zone</Link></li>
          <li><Link to="/Journey">Journey</Link></li>
          <li><Link to="/Get In Touch">Get In Touch</Link></li>
          <li><button className="btn1"><Link to="/Sign in">Sign in</Link></button></li>
          <li><button className="btn2"><Link to="/log in">Log in</Link></button></li>
        </ul>
      </div>

      <div className="Toggle-button" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

    </nav>
  );
};

export default Home;
