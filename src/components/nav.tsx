// NavBar.tsx
import React from 'react';

// Define types for navigation items
interface NavItem {
  name: string;
  link: string;
}

// Create a functional component for the navigation bar
const NavBar: React.FC = () => {
  const navItems: NavItem[] = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">MyLogo</a>
      </div>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
