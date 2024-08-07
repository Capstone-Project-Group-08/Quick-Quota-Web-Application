import React, { useState } from 'react';
import Logo1 from './Logo1.png';
import './ForgotPassword.css';
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setErrorMessage('Please enter the same password');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/forgot-password/', {
        username: username,
        new_password: newPassword,
        confirm_password: confirmPassword
      });
      if (response.data.message) {
        setSuccessMessage('ok');
      } else {
        setErrorMessage(response.data.error || 'Please Enter Valid Username');
      }
    } catch (error) {
      setErrorMessage('Password Update Successfully Completed');
    }
  };

  return (
    <div className='Fmain'>
      <div className="forgot">
        <img src={Logo1} alt="Logo" className='LogoF' />

        <form onSubmit={handleSubmit}>
          <div className="input-box1">
            <input type="text" placeholder="Username" required className="user" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="input-box1">
            <input type={showPassword ? 'text' : 'password'} placeholder='New Password' required className="user"value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <FaLock className="icon" />
            {showPassword ? (
              <FaEyeSlash className="icon eye-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className="icon eye-icon" onClick={togglePasswordVisibility} />
            )}
          </div>

          <div className="input-box1">
            <input type={showPassword ? 'text' : 'password'}placeholder='Confirm Password' required className="user"value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)}/>
            <FaLock className="icon" />
            {showPassword ? (
              <FaEyeSlash className="icon eye-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className="icon eye-icon" onClick={togglePasswordVisibility} />
            )}
          </div>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

          <div>
            <button type="submit">Submit</button>
            <div style={{ marginTop: '20px' }}>
              <Link to="/log in" style={{ fontSize: '20px' }}><button>Again Log In Here</button></Link>
            </div>
          </div>



        </form>
      </div>
    </div>
  );
}
