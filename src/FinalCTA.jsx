// src/components/FinalCTA.jsx

import React from 'react';
import './styles/finalCTA.css';

const FinalCTA = () => {
  return (
    <section className="finalcta-section">
      <div className="background-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
      </div>

      <div className="finalcta-container">
        <h2 className="finalcta-heading">
          Work like a founder. <span className="gradient-text">Without working out of cafés.</span>
        </h2>

        <p className="finalcta-subtitle">
          Find your own space, show up like a pro, and get more done.
        </p>

        <div className="finalcta-buttons">
          <a href="/book-tour" className="cta-btn primary">
            <span>Book a Private Tour</span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="wave-decoration">
        <svg viewBox="0 0 1440 120" className="wave-svg">
          <path fill="#e2d3c6" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,90.7C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;
