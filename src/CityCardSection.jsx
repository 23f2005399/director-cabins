import React from 'react';
import './styles/cityCardSection.css';

import delhiImg from './assets/images/delhi.png';
import hyderabadImg from './assets/images//hyderabad.png';
import gurgaonImg from './assets/images/gurugram.png';
import noidaImg from './assets/images/cabin-range.jpg';

const cityData = [
  { name: 'Delhi', image: delhiImg, link: 'https://www.altfcoworking.com/coworking-space/delhi/' },
  { name: 'Hyderabad', image: hyderabadImg, link: 'https://www.altfcoworking.com/coworking-space/hyderabad/' },
  { name: 'Gurgaon', image: gurgaonImg, link: 'https://www.altfcoworking.com/coworking-space/gurgaon/' },
  { name: 'Noida', image: noidaImg, link: 'https://www.altfcoworking.com/coworking-space/noida/' },
];

const CityCardSection = () => {
  return (
    <section className="city-section">
      <div className="city-container">
        <h2 className="city-heading">Find a Director Cabin in your city</h2>
        <div className="city-grid">
          {cityData.map((city, index) => (
            <a
              key={index}
              href={city.link}
              target="_blank"
              rel="noopener noreferrer"
              className="city-card"
              style={{ backgroundImage: `url(${city.image})` }}
            >
              <div className="city-overlay">
                <h3>{city.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityCardSection;
