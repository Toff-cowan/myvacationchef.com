import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { FaBars } from 'react-icons/fa';
import Dropdown from './Dropdown';

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

  return (
    <div className="navbar">
      <img src={assets.logo_main} alt="My Vacation Chef Logo" className="logo" />

      <ul className="nav-links">
        <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={() => setMenu("about")} className={menu === "about"?"active":""}>Camille's Kitchen</li>
        <li
          ref={menuBtnRef}
          onClick={() => setFlyoutVisible((v) => !v)}
          onClickCapture={() => setMenu("Menu")}
          className={menu === "Menu"?"active":""}
        >
          Menus
        </li>
        <li onClick={() => setMenu("contact-me")} className={menu === "contact-me"?"active":""}>Contact Me</li>
        <li onClick={() => setMenu("blog")} className={menu === "blog"?"active":""}>Blog</li>
        <button className='sign-in-btn'>Sign In</button>
      </ul>

      {flyoutVisible && (
       <div
  className="flyout-menu"
  ref={flyoutRef}
  style={{
    position: 'absolute',
    top: menuBtnRef.current?.getBoundingClientRect().bottom + window.scrollY + 10,
    left: menuBtnRef.current?.getBoundingClientRect().left,
  }}
>
  <Dropdown />
</div>
      )}
    </div>
  );
};

export default Navbar;
