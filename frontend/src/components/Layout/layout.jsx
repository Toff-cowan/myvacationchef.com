import React from 'react';
import { Outlet } from 'react-router-dom'; // Add this import
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => { // Remove children prop
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;