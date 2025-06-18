import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FaBars } from 'react-icons/fa';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import {IKImage} from 'imagekitio-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const [flyoutVisible, setFlyoutVisible] = useState(false);

  const menuBtnRef = useRef(null);
  const flyoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        flyoutVisible &&
        flyoutRef.current &&
        !flyoutRef.current.contains(e.target) &&
        !menuBtnRef.current.contains(e.target)
      ) {
        setFlyoutVisible(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [flyoutVisible]);
    const navbarRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      if (prevScrollPos > currentScrollPos) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-200px";
      }
      
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);}, []);


  return (
    <div className="navbar" ref={navbarRef}>
      <Link to="/"><img src={assets.logo_main} alt="My Vacation Chef Logo" className="logo" /></Link>

      <ul className="nav-links">
       <Link to="/"><li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</li></Link>
        <Link to="/about"><li onClick={() => setMenu("about")} className={menu === "about"?"active":""}>Camille's Kitchen</li></Link>
        <li
          ref={menuBtnRef}
          onClick={() => setFlyoutVisible((v) => !v)}
          onClickCapture={() => setMenu("Menu")}
          className={menu === "Menu"?"active":""}
        >
          Menus
        </li>
        <Link to='/contact-me'><li onClick={() => setMenu("contact-me")} className={menu === "contact-me"?"active":""}>Contact Me</li></Link>
        <Link to='/blog'><li onClick={() => setMenu("blog")} className={menu === "blog"?"active":""}>Blog</li></Link>
          
                  <SignedOut>
                  <Link to='/login'>
                  <button className='sign-in-btn'>Register/Login</button>
                  </Link>
                  </SignedOut>
                  <SignedIn>
                  <UserButton />
                  </SignedIn>
      </ul>

      <div className={`flyout-menu ${flyoutVisible ? 'open' : ''}`} ref={flyoutRef}>
  <Dropdown />
</div>
    </div>
  );
};

export default Navbar;
