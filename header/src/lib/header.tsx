import React from 'react';
import styles from './header.module.css';

export interface HeaderProps {
  title: string;
  logoUrl?: string;
  links: { name: string; href: string }[];
}

export const Header: React.FC<HeaderProps> = ({ title, logoUrl, links }) => {
  return (
    <header className={styles.header}>
      {/* Logo e titolo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {logoUrl && <img src={logoUrl} alt="Logo" className={styles.logo} />}
        <h1 className={styles.title}>{title}</h1>
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