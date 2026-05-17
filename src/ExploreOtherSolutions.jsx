// src/components/ExploreOtherSolutions.jsx
import React from 'react';
import './styles/exploreOtherSolutions.css';
import { FaUsers, FaBuilding } from 'react-icons/fa';

const options = [
  {
    title: 'Private Team Room',
    description: 'For two to twenty',
    icon: <FaUsers className="eos-icon" />,
    link: 'https://www.altfcoworking.com/workspace-solutions/private-office/team-rooms/'
  },
  {
    title: 'Office Suite',
    description: 'For growing teams needing their own meeting room',
    icon: <FaBuilding className="eos-icon" />,
    link: 'https://www.altfcoworking.com/workspace-solutions/private-office/office-suites/'
  },
];

const ExploreOtherSolutions = () => {
  return (
    <section className="eos-section">
      <div className="eos-container">
        <h2 className="eos-title">Need something bigger or team-focused?</h2>
        <p className="eos-subtext">Explore these alternatives:</p>
        <div className="eos-grid">
          {options.map((option, index) => (
            <div className="eos-card" key={index}>
              <div className="eos-icon-wrapper">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <a 
                href={option.link} 
                className="eos-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Learn More <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOtherSolutions;
