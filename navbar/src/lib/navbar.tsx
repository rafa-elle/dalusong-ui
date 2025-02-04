// Navbar.tsx
import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  // Array di link per la navbar
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Logo o nome brand */}
      <div className={styles.brand}>Library</div>

      {/* Lista di link */}
      <ul className={styles.navList}>
        {links.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <a href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;