// Portfolio.jsx
import React from 'react';
import Layout from '@components/layout/Layout';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <Layout 
      pageTitle="Portfolio" 
      pageDescription="A collection of my creative work and projects"
    >
      <main className="portfolio-container">
        {/* Portfolio content */}
      </main>
    </Layout>
  );
};

export default Portfolio;