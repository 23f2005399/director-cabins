import React, { useRef, useEffect, useState } from 'react';
import './styles/heroSection.css';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="video-container">
        <video
          ref={videoRef}
          className={`bg-video ${isVideoLoaded ? 'loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={require('./assets/images/director_cabin.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay" />
      </div>

      {/* Top-left Breadcrumb */}
      <nav className={`breadcrumb ${isVisible ? 'visible' : ''}`}>
        <a href="https://www.altfcoworking.com/">Home</a> <span>&gt;</span>
        <a href="https://www.altfcoworking.com/workspace-solutions/">Workspace Solutions</a> <span>&gt;</span>
        <a href="https://www.altfcoworking.com/workspace-solutions/private-office/">Private Office</a> <span>&gt;</span>
        <span className="highlight">Director Cabins</span>
      </nav>

      {/* Hero Content */}
      <div className="content-overlay">
        <div className="hero-text">
          <h1 className="headline">
            <div className={`line ${isVisible ? 'visible' : ''}`}>Your Own Cabin.</div>
            <div className={`line ${isVisible ? 'visible delay' : ''}`}>Without the Overhead.</div>
          </h1>
          <p className={`subhead ${isVisible ? 'visible' : ''}`}>
            For founders, consultants, and business leaders who need a quiet, private workspace to think,
            take calls, meet clients, and get things done. <br />
            <span className="bold-red">No distractions. No leases.</span>
          </p>
          <button className="cta-button">Book a Private Tour</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
