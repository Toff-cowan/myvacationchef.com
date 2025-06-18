import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


const Home = () => {
  const [showRecentPosts, setShowRecentPosts] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const recentPosts = [
    {
      id: 1,
      title: "No Title",
      excerpt: "Explore the flavors of Italy with these regional specialties...",
      date: "MM/DD/YYYY",
      image: assets.blog
    },
  ];

  useEffect(() => {
    // Animation for paragraphs on load
    const paragraphs = document.querySelectorAll('.float-in-paragraph');
    paragraphs.forEach((p, index) => {
      p.style.animation = `floatInLeft 0.8s ease-out ${index * 0.2}s forwards`;
    });

    const handleScroll = () => {
      const blogSection = document.querySelector('.blog-section');
      if (blogSection) {
        const rect = blogSection.getBoundingClientRect();
        setShowRecentPosts(rect.top <= window.innerHeight * 0.8);
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    // Trigger once on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <Header/>
      
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <section className="about-section">
            <div className="about-content">
              <div className="about-text">
                <h2>Meet Chef Camille</h2>
                <p className="float-in-paragraph">
                  Chef Camille brings you an unforgettable plant-forward culinary experience in Montego Bay, Jamaica. Enjoy private dinners, personal chef services, and small-bite parties with a touch of island flavor.
                </p>
                <p className="float-in-paragraph">
                  Chef Camille brings you an unforgettable plant-forward culinary experience in Montego Bay, Jamaica. Enjoy private dinners, personal chef services, and small-bite parties with a touch of island flavor.
                </p>
                <button className="learn-more-btn float-in-paragraph">Learn More</button>
              </div>
              <div className="about-image">
                <img className="float-in-paragraph" src={assets.chefCamille1} alt="Chef Camille in the kitchen" />
              </div>
            </div>
          </section>
        </section>

      <section className="cards-section ">
    <h1 className="cedarville-cursive-regular" >What I Can Do For You!</h1>
    <div className="card animate-float">
      <img src={assets.chefVegPan} alt="Card 1" />
      <h2>Private Dinner Party</h2>
      <p>Rediscover the joy of an exquisite dining experience</p>
      <button>Learn More</button>
    </div>
    <div className="card animate-float">
      <img src={assets.chefCamille2} alt="Card 2" />
      <h2>Vacation Chef on Deck</h2>
      <p>Reserve Chef Camille for your entire stay on the island!</p>
      <Link to='/about'><button>Learn More</button></Link>
    </div>
    <div className="card animate-float">
      <img src={assets.jamfest} alt="Card 3" />
      <h2>Jam Fest</h2>
      <p>Small Bites display for your  party or special occasion</p>
      <button>Learn More</button>
    </div>
  </section>

        {/* Blog Section */}
        <section className={`blog-section ${showRecentPosts ? 'visible' : ''}`}>
          <h3>Recent Blog Posts</h3>
          <div className="posts-grid">
            {recentPosts.map(post => (
              <div key={post.id} className="post-card">
                <div className="post-image" style={{ backgroundImage: `url(${post.image})` }}></div>
                <div className="post-content">
                  <span className="post-date">{post.date}</span>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="read-more">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Home;