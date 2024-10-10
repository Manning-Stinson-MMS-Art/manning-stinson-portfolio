// src/Favicon.jsx
import { useEffect } from 'react';

const Favicon = ({ icon }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = icon;

    // Append the favicon link to the head
    document.head.appendChild(link);

    // Clean up by removing the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, [icon]);

  return null; // This component does not render anything
};

export default Favicon;
