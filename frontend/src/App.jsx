import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SinglePost from './pages/Blog/SinglePost';
import Write from './pages/Blog/Write';
import Login from './pages/User/Login';
import Register from './pages/User/Register';

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Routes WITH Layout (Navbar + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/blog/post" element={<SinglePost />} />
          <Route path="/blog/write" element={<Write />} />
        </Route>

        {/* Routes WITHOUT Layout (Standalone pages) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;