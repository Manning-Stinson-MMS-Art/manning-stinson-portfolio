// PageTitle.jsx
import React from 'react';
import './PageTitle.scss';

const PageTitle = ({ title, description }) => {
 return (
   <div className="page-title-container">
     <h1 className="page-title">{title}</h1>
     {description && <p className="page-description">{description}</p>}
   </div>
 );
};

export default PageTitle;