import React from 'react';
import PortfolioHeader from './portfolio-header';
import PortfolioContent from './portfolio-content';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <PortfolioHeader />
      <PortfolioContent />
    </div>
  );
};

export default Portfolio;