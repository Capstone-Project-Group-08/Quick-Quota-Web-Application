import React, { useEffect, useState } from 'react';
import './Profile.css';
import IconP1 from './IconP1.png';
import Timer from './Timer';
import { Link, useNavigate } from "react-router-dom";
import Video from './Video.mp4';

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

const videoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transform: 'translate(-50%, -50%)',
  zIndex: '1',
};

const getCurrentTime = (timeZone) => {
  return new Date().toLocaleTimeString('en-US', { timeZone });
};

export default function Profile() {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const [timeZone, setTimeZone] = useState('UTC');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const interval = setInterval(() => {
      setTime(getCurrentTime(timeZone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  const handleTimeZoneChange = (event) => {
    setTimeZone(event.target.value);
  };

  const handleLogout = () => {
    const loginTime = new Date(localStorage.getItem('login_time'));
    const logoutTime = new Date();
    const duration = Math.abs(logoutTime - loginTime) / 36e5; // in hours

    let messageFile;
    if (duration < 3) {
      messageFile = 'Message1';
    } else if (duration <= 6) {
      messageFile = 'Message2';
    } else {
      messageFile = 'Message3';
    }

    localStorage.setItem('logout_time', logoutTime.toISOString());
    localStorage.setItem('duration', duration);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');

    navigate(`/${messageFile}`, { state: { duration } });
  };

  return (
    <div style={containerStyle}>

      <video style={videoStyle} autoPlay loop muted><source src={Video} type="video/mp4" /></video>

      <div className='Pmain'>
        <div className="Profile">

          <div className='Check-p'>
            <h4 className='Check-h4'>Check Your<br /> Progress</h4>
            <Link to="/FinalResult"><img src={IconP1} alt="Check Progress" className='IconP1' /></Link>
          </div>


          <button className="pr-btn" onClick={handleLogout}>Log Out</button>

          <div className="welcome-message">
            <i>{`Hello ${username},`}</i> <br />
           <i><b>Welcome to Quick Quota</b></i>
          </div>

          <Timer />

          <div className="clock-container">

            <div className="up">
              <h2 className="clock-time">Current Time: {time}</h2>
            </div>

            <div className="down">
              <select value={timeZone} onChange={handleTimeZoneChange} className="select1">
                <option className="textcolor" value="UTC">UTC</option>
                <option className="textcolor" value="America/New_York">New York (EST)</option>
                <option className="textcolor" value="Europe/London">London (GMT)</option>
                <option className="textcolor" value="Asia/Tokyo">Tokyo (JST)</option>
                <option className="textcolor" value="Australia/Sydney">Sydney (AEDT)</option>
                <option className="textcolor" value="Asia/Colombo">Sri Lanka (IST)</option>
                <option className="textcolor" value="Asia/Kolkata">India (IST)</option>
                <option className="textcolor" value="Asia/Singapore">Singapore (SGT)</option>
                <option className="textcolor" value="America/Toronto">Canada (EST)</option>
              </select>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
