import React from 'react';
import { useLocation } from 'react-router-dom';
import './Message.css';

const Message1 = () => {
    const location = useLocation();
    const { duration } = location.state || { duration: 0 };

    return (


        <div className='full'>
            <div className="message-box">
                <div className="message-content">
                    <span className="close-button" onClick={() => window.location.href = '/'}>&times;</span>
                    <center><h2>Session Report</h2></center>
                    <p>Your Screen Time is less than 3 hours.</p>
                    <b><u><p>Duration: {duration.toFixed(2)} hours</p></u></b>
                </div>
            </div>
        </div>
    );
};

export default Message1;
