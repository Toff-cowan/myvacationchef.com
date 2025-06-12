import React from 'react';
import './Dropdown.css';
import { FaUtensils } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Dropdown = () => {
  return (
    <div className="menu-nav">
      <div className="menu-right">
        <img src={assets.logo_main} alt="My Vacation Chef Logo" className="menu-logo" />
      </div>

      <ul className="menu-left">
        <li><FaUtensils className="menu-icon" /><span>Menu1</span></li>
        <li><FaUtensils className="menu-icon" /><span>Menu2</span></li>
        <li><FaUtensils className="menu-icon" /><span>Menu3</span></li>
      </ul>
    </div>
  );
};

export default Dropdown;
