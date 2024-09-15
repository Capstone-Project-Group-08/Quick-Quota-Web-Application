import React from 'react';
import { useLocation } from 'react-router-dom';
import './Message.css';
import Video from './3.mp4';


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


const Message3 = () => {
    const location = useLocation();
    const { duration } = location.state || { duration: 0 };

    return (
        <div className='full'>
            <video style={videoStyle} autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
            <div className="message-box">
                <div className="message-content">
                    <span className="close-button" onClick={() => window.location.href = '/'}>&times;</span>
                    <center><h2>Session Report</h2></center>
                    <p>Your Screen Time is more than 6 hours.</p>
                    <p>Duration: {duration.toFixed(2)} hours</p>
                </div>
            </div>
        </div>
    );
};

export default Message3;