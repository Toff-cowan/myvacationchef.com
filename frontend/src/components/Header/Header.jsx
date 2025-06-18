import React, {useEffect, useRef} from 'react'
import './Header.css'
import { FaBars, FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.classList.add('fade-in');
      }
    }, 100);
    return () => clearTimeout(timeout); // cleanup on unmount
      }, []);

  return (
    

    <div className="header">

      <video autoPlay muted loop id="bg-video">
        <source src={assets.pot2Video} type="video/mp4" />
      </video>
      <div className="header-contents" ref={headerRef}>
        <h1>Welcome</h1>
        <p>to Chef Camille's Official Website</p>
        <div className="social-links">
        <a href="https://www.facebook.com/share/1Bwq5Xa93Q/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/myvacationchef?utm_source=qr&igsh=MWVib295amxyNzd6bg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@myvacationchef?_t=8na0t7zhv7N&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://www.linkedin.com/in/camille-sergeant-a97709b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://pin.it/5u6xOCQN7" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
</div>
    </div>
     </div>
  )
}

export default Header
