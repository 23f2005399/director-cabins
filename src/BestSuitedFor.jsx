import React, { useEffect, useRef, useState } from 'react';
import {
  FaUserTie,
  FaBrain,
  FaBriefcase,
  FaTools
} from 'react-icons/fa';
import './styles/bestSuitedFor.css';

// Import images from local files
import collage1 from './assets/images/101.jpg';
import collage2 from './assets/images/102.png';
import collage3 from './assets/images/103.jpg';
import collage4 from './assets/images/104.png';

const BestSuitedFor = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const collageImages = [collage1, collage2, collage3, collage4];

  const features = [
    {
      icon: <FaUserTie />,
      title: "A founder juggling operations and investor calls, needing a space that matches your ambition",
      color: "#e15252",
      gradient: "linear-gradient(135deg, #e15252 0%, #d36161 100%)"
    },
    {
      icon: <FaTools />,
      title: "Done with managing office rent, staff, or logistics - focus on what truly matters", 
      color: "#e15252",
      gradient: "linear-gradient(135deg, #e15252 0%, #d36161 100%)"
    },
    {
      icon: <FaBrain />,
      title: "A senior leader needing a space to think clearly and make decisions that shape the future",
      color: "#e15252",
      gradient: "linear-gradient(135deg, #e15252 0%, #d36161 100%)"
    },
    {
      icon: <FaBriefcase />,
      title: "Looking for a cabin where privacy, power, and professionalism meet in perfect harmony",
      color: "#e15252",
      gradient: "linear-gradient(135deg, #e15252 0%, #d36161 100%)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-adjacent-section" ref={sectionRef}>
      {/* Background Elements */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      <div className="bg-decoration bg-decoration-3"></div>

      <div className="hero-adjacent-container">
        {/* Main Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="hero-adjacent-title">
            Designed for individuals who 
            <span className="title-highlight"> move things forward</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="main-content-area">
          {/* Left: Feature Cards */}
          <div className="features-section">
            <div className="section-label">
              <span>Ideal if you're: </span>
            </div>
            
            <div className="feature-cards-grid">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card-large"
                  style={{
                    '--feature-color': feature.color,
                    '--feature-gradient': feature.gradient
                  }}
                >
                  <div className="feature-icon-container">
                    <div className="feature-icon-bg">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <div className="card-border"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Gallery */}
          <div className="visual-section">
            <div className="gallery-header">
              <h3></h3>
              <p>Experience the environment where great decisions are made</p>
            </div>
            
            <div className="enhanced-gallery">
              <div className="main-image">
                <img 
                  src={collageImages[activeCard]} 
                  alt={`Workspace ${activeCard + 1}`}
                  className="primary-image"
                />
              </div>
              
              <div className="thumbnail-grid">
                {collageImages.map((src, index) => (
                  <div 
                    key={index} 
                    className={`thumbnail ${activeCard === index ? 'active' : ''}`}
                    onClick={() => setActiveCard(index)}
                  >
                    <img src={src} alt={`Thumbnail ${index + 1}`} />
                    <div className="thumbnail-overlay"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSuitedFor;
