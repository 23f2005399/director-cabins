import React from 'react';
import './App.css';

// Component imports
import HeroSection from './HeroSection';
import BestSuitedFor from './BestSuitedFor';
import KeyFeatures from './KeyFeatures';
import ImageGallery from './ImageGallery';
import ComparisonTable from './ComparisonTable';
import DealsOffers from './DealsOffers';
import CityCardSection from './CityCardSection';
import Testimonials from './Testimonials';
import ExploreOtherSolutions from './ExploreOtherSolutions';
import FinalCTA from './FinalCTA';

function privateofficeparts() {
  return (
    <div className="App">
      <HeroSection />
      <BestSuitedFor />
      <KeyFeatures />
      <ImageGallery/>
      <ComparisonTable />
      <DealsOffers />
      <CityCardSection />
      <Testimonials />
      <ExploreOtherSolutions />
      <FinalCTA />
    </div>
  );
}

export default privateofficeparts;
