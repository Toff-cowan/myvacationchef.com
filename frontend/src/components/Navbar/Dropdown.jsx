import React from 'react';
import './Dropdown.css';
import { FaUtensils } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Dropdown = () => {
  return (
    <div>
      <div className="menu-nav">
        {/* Left column: image cards */}
        <div className="menu-left-panel">
  <div className="preview-row">
    <div className="preview-card">
      <img src={assets.food1} alt="Cooking 1" />
      <div className="preview-text">
        <h4>Boost your taste</h4>
        <p>Discover flavor-rich dishes that impress every time.</p>
      </div>
    </div>
    <div className="preview-card">
      <img src={assets.spices} alt="Cooking 2" />
      <div className="preview-text">
        <h4>Fresh ingredients</h4>
        <p>Cook with vibrant produce and local spices.</p>
      </div>
    </div>
  </div>
</div>

        {/* Divider */}
        <div className="menu-divider"></div>

        {/* Right column: menu links */}
        <ul className="menu-right-panel">
          <li><a href="#menu1"><FaUtensils className="menu-icon" /><span>Breakfast Menu</span></a></li>
          <li><a href="#menu2"><FaUtensils className="menu-icon" /><span>Lunch Menu</span></a></li>
          <li><a href="#menu3"><FaUtensils className="menu-icon" /><span>Dinner Menu</span></a></li>
        </ul>
      </div>

      <div className="menu-ribbon"></div>
    </div>
  );
};

export default Dropdown;
