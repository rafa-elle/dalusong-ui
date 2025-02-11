import React from 'react';
import styles from './header.module.css';

const Header = () => {
  // Dati per i link di navigazione
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={styles.header}>
      {/* Logo e titolo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://via.placeholder.com/40" // URL di un logo placeholder
          alt="Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>MyWebsite</h1>
      </div>

      {/* Barra di navigazione */}
      <nav className={styles.nav}>
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
    </header>
  );
};

export default Header;