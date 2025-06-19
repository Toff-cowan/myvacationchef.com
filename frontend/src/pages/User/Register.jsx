import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Login.css'; 

const Register = () => {
  return (
    <div className="auth-container">
      {/* Video Background with Overlay */}
      <video autoPlay loop muted playsInline className="auth-video">
        <source src={assets.flameVideo} type="video/mp4" /></video>
      <div className="video-overlay"></div>


      {/* Clickable Logo */}
      <Link to="/">
        <img 
          src={assets.logo_main} 
          alt="Logo" 
          className="auth-logo" 
        />
      </Link>

      {/* Auth Content */}
      <div className="auth-content">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};

export default Register;