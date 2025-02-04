import React from 'react';
import styles from './header.module.css';

export interface HeaderProps {
  title: string;
  logoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, logoUrl }) => {
  return (
    <header className={styles.header}>
      {logoUrl && <img src={logoUrl} alt="Logo" className={styles.logo} />}
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default Header;