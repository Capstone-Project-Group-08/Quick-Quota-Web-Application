import React, { useState } from "react";
import "./Login.css";
import Logo1 from "./Logo1.png";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });
      if (response.data.success) {
        setNotification('Login successful');
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        localStorage.setItem('username', username);

        // Save login time
        localStorage.setItem('login_time', new Date().toISOString());

        navigate('/profile'); // Redirect to Profile page
      } else {
        setError(response.data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError('Something went wrong. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://127.0.0.1:8000/auth/login/google-oauth2/';
  };

  return (
    <div className="wrapper">
      <div className="side-02">
        <div className="Double">
          <p>
            Unlock a world of<br />
            possibilities with just a<br />
            Click-sign in to embark<br />
            on your digital journey<br />
            today
          </p>
          <button type="button" className="loginbutton">
            <Link to="/Sign in">Sign In</Link>
          </button>
          <img src={Logo1} alt="Logo" className="Logo1" />
        </div>
      </div>

      <div className="side-01">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>

          <div className="input-box">
            <input type="text" placeholder="Continue with Google" readOnly className="user google-input" onClick={handleGoogleLogin}/>
          </div>

          <div className="input-box">
            <input type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value); setError('');}} required className="user"/>
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} required className="user"/>
            <FaLock className="icon" />
            {showPassword ? (
              <FaEyeSlash className="icon eye-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className="icon eye-icon" onClick={togglePasswordVisibility} />
            )}
          </div>

          {error && <div className="error-message">{error}</div>}
          {notification && <div className="notification-message">{notification}</div>}

          <div className="remember-forget">
            <div className="forgot-password">
              <Link to="/Forgot Password" style={{ fontSize: '20px' }}>Forgot Password</Link>
            </div>
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
