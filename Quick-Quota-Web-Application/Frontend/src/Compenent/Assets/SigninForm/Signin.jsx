import React, { useState } from "react";
import './Signin.css';
import Logo2 from './Logo2.png';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTermsAgreement = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !termsAgreed) {
      alert("Please fill in all fields and agree to the terms");
      return;
    }
    // Make API call to register user with username and password
    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => {
        if (response.ok) {
          // Redirect to Fun Zone page
          window.location.href = '/log%20in';
        } else {
          // Handle error response
          response.json().then(data => {
            alert(data.error || 'Something went wrong.');
          });
        }
      })
      .catch(error => {
        console.error("Registration Error:", error);
        // Handle network error
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="wrapper">
      <div className="side-001">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} required className="user"/>
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type={showPassword ? "text" : "password"}placeholder="Password"value={password}onChange={handlePasswordChange} required className="user"/>
            <FaLock className="icon" />
            {showPassword ? (
              <FaEyeSlash className="icon eye-icon" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className="icon eye-icon" onClick={togglePasswordVisibility} />
            )}
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" checked={termsAgreed} onChange={handleTermsAgreement} /> I agree with terms and condition
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>

      <div className="side-002">
        <div className="Double">
          <p>
            Welcome back to your<br />
            digital oasis-Login to<br />
            Continue your journey
          </p>
          <button type="button" className="loginbutton">
            <Link to="/log in">LogIn</Link>
          </button>
        </div>
        <img src={Logo2} alt="" className="Logo2" />
      </div>
    </div>
  );
};

export default SigninForm;