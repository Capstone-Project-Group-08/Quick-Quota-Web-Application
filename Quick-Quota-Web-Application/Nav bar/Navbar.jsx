import React from 'react'
import './Navbar.css';
import logo from './logo.png'
import { Link } from 'react-router-dom';

const Home =() => {
  return (
    <nav>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>
          <Link to = "/Home">Home</Link>
        </li>
        <li>
          <Link to = "/Offerings">Offerings</Link>
        </li>
        <li>
          <Link to = "/Fun Zone">Fun Zone</Link>
        </li>
        <li>
          <Link to = "/Journey">Journey</Link>
        </li>
        <li>
          <Link to = "/Get In Touch">Get In Touch</Link>
        </li>
        <li>
          <button className='btn1'><Link to = "/Sign in">Sign in</Link></button>
        </li>
        <li>
          <button className='btn2'><Link to = "/log in">Log in</Link></button>
        </li>
        
      </ul>
    </nav>
  )
}

export default Home