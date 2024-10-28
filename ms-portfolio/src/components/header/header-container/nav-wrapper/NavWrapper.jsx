import React from 'react';
import './NavWrapper.scss';

const NavWrapper = () => {
  const navItems = [
    { text: 'about', path: '/about' },
    { text: 'book', path: '/book' },
    { text: 'portfolio', path: '/portfolio' },
    { text: 'blog', path: '/blog' },
    { text: 'contact', path: '/contact' }
  ];

  return (
    <nav className="nav-wrapper">
      {navItems.map((item) => (
        <a key={item.text} href={item.path}>
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default NavWrapper;