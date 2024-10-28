import React from 'react';
import './SocialIcons.scss';

const SocialIcons = () => {
  const socialLinks = [
    { platform: 'twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/yourusername', icon: 'in' },
    { platform: 'facebook', url: 'https://facebook.com/yourusername', icon: 'f' },
    { platform: 'instagram', url: 'https://instagram.com/yourusername', icon: '📷' }
  ];

  return (
    <div className="social-icons-wrapper">
      {socialLinks.map((social) => (
        <a 
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;