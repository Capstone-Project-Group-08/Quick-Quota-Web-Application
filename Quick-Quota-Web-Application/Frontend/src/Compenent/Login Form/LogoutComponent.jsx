import React from 'react';
import { Link } from 'react-router-dom';
import IconP2 from './IconP2.png'; // Update this path according to your project structure

export default function LogoutComponent() {
    const handleLogout = () => {
        localStorage.removeItem('username');
        // You can add additional logout logic here if needed
    };

    return (
        <div className='Check-p2'>
            <h5 className='Check-h5'>Log Out</h5>
            <Link to="/log in" onClick={handleLogout}>
                <img src={IconP2} alt="Log Out" className='IconP2' />
            </Link>
        </div>
    );
}
