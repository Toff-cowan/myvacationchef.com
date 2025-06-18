import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Login.css'; // Reuse the same CSS file

const Register = () => {
  return (
    <div className="auth-container">
      {/* Video Background with Overlay */}
      <div className="video-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="auth-video"
        >
          <source src={assets.flameVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

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