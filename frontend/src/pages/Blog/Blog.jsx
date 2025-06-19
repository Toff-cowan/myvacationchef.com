import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Blog.css';

const Blog = () => {
  // Sample post data with images/videos
  const featuredPosts = [
    {
      id: 1,
      title: 'Welcome to the Myvacation chef experience',
      excerpt: 'Cooking, Baking, Catering...whatever it is we are honing our craft',
      date: 'May 15, 2023',
      category: 'Development',
      media: assets.friedShrimpGrits,
      mediaType: 'image'
    },
    {
      id: 2,
      title: 'CSS Grid Layout Mastery',
      excerpt: 'Master modern layout techniques with CSS Grid.',
      date: 'June 2, 2023',
      category: 'Design',
      media: assets.cookingVideo, // video path
      mediaType: 'video'
    }
  ];

  const recentPosts = Array.from({ length: 10 }, (_, i) => ({
    id: i + 3,
    title: `Advanced Topic ${i + 1}`,
    excerpt: `Deep dive into advanced concepts for professional developers. Part ${i + 1}`,
    date: new Date(2023, 6, i + 1).toLocaleDateString(),
    category: ['Development', 'Design', 'Performance'][i % 3],
    media: i % 2 ? assets.design_patterns : assets.performance_optimization,
    mediaType: i % 2 ? 'image' : 'video'
  }));

  return (
    <div className="blog-container">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/blog">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className="intro-section">
        <div className="intro-text">
          <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            rerum accusantium.
          </p>
        </div>
        <Link to="/blog/write" className="animated-button">
          <svg viewBox="0 0 200 200" width="200" height="200">
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="circle-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* FEATURED POSTS */}
      <div className="featured-section">
        <h2>Featured Posts</h2>
        <div className="featured-grid">
          {featuredPosts.map(post => (
            <div key={post.id} className="featured-card">
              <div className="post-media">
                {post.mediaType === 'image' ? (
                  <img src={post.media} alt={post.title} />
                ) : (
                  <video controls>
                    <source src={post.media} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className="post-content">
                <span className="category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-footer">
                  <span>{post.date}</span>
                  <Link to={`/blog/post/${post.id}`}>Read →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECENT POSTS GRID */}
      <div className="recent-section">
        <h2>Recent Posts</h2>
        <div className="recent-grid-container">
          <div className="recent-grid">
            {recentPosts.map(post => (
              <div key={post.id} className="recent-card">
                <div className="post-media">
                  {post.mediaType === 'image' ? (
                    <img src={post.media} alt={post.title} />
                  ) : (
                    <video controls>
                      <source src={post.media} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="post-content">
                  <span className="category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <span>{post.date}</span>
                    <Link to={`/blog/post/${post.id}`}>Read →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;