import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector('.footer');
      if (footerElement) {
        const rect = footerElement.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-container">
       
        <div className="footer-main">
          <div className="footer-brand">
            <img src={assets.logo_main} alt="My Vacation Chef" className="footer-logo" />
            <p className="footer-tagline">Creating memorable dining experiences in your vacation home</p>  
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h4>Navigation</h4>
              <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>Camille's Kitchen</li></Link>
                <Link to='/menu'><li>Menu</li></Link>
                <Link to='/contact'><li>Contact Me</li></Link>
                <Link to='/blog'><li>Blog</li></Link>
              </ul>
            </div>

            <div className="links-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/cookies">Cookie Policy</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4>Connect</h4>
              <ul className="social-links">
                <li><a href="https://www.instagram.com/myvacationchef?utm_source=qr&igsh=MWVib295amxyNzd6bg=="> Instagram</a></li>
                <li><a href="https://www.facebook.com/share/1Bwq5Xa93Q/"> Facebook</a></li>
                <li><a href="https://pin.it/5u6xOCQN7"> Pinterest</a></li>
                <li><a href="https://www.tiktok.com/@myvacationchef?_t=8na0t7zhv7N&_r=1">TikTok</a></li>
                <li><a href="https://www.linkedin.com/in/camille-sergeant-a97709b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
         <div className="reservation-cta">
          <a href="https://682186.17hats.com/p#/lcf/nntbkgssxgpptpgccfxgwthttwtcgnfn" className="reservation-btn">
            Make a Reservation
          </a>
        </div>
        

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} My Vacation Chef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;