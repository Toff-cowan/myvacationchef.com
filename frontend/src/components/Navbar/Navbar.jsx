import React, {useState}  from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu, setMenu] = useState("menu");

  return (
    //Navbar component
    <div className="navbar">
      <img src={assets.logo_main} alt="My Vacation Chef Logo" className="logo" />
  
    <ul class="nav-links">
      <li onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</li>
      <li onClick={()=>setMenu("about")}className={menu==="about"?"active":""}>Camille's Kitchen</li>
      <li onClick={()=>setMenu("Menu")}className={menu==="Menu"?"active":""}>Menus</li>
      <li onClick={()=>setMenu("contact-me")}className={menu==="contact-me"?"active":""}>Contact Me</li>
      <li onClick={()=>setMenu("blog")}className={menu==="blog"?"active":""}>Blog</li>
      <button className='sign-in-btn'>Sign In</button>
    </ul>
        

  </div>


  )
}

export default Navbar
