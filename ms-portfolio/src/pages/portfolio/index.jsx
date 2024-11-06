// Portfolio.jsx
import React from 'react';
import Layout from '@components/layout/Layout';
import './index.scss';

const Portfolio = () => {
  return (
    <Layout
      pageTitle="Portfolio"
      pageDescription="A collection of anomalies"
      titleAlignment="text-left"  // Add this line
    >
      <main className="portfolio-container">
        {/* Portfolio content */}
      </main>
    </Layout>
  );
};
export default Portfolio;