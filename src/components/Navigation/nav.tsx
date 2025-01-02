// NavBar.tsx
import React from 'react';
import styles from './nav.module.css'

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
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">MyLogo</a>
      </div>
      <ul className={styles.navlinks}>
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
