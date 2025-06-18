import { SignIn } from '@clerk/clerk-react';
import React from 'react';
import { assets } from '../../assets/assets';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      {/* Video Background */}
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

      {/* Logo Overlay */}
      <Link to='/'><img src={assets.logo_main} alt="Logo" className="auth-logo"/></Link>

      {/* Clerk SignIn Component */}
      <div className="auth-content">
        <SignIn signUpUrl='/register' />
      </div>
    </div>
  );
};

export default Login;