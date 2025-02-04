// Hero.tsx
import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Titolo */}
      <h1 className={styles.heroTitle}>Library</h1>

      {/* Descrizione */}
      <p className={styles.heroDescription}>
        Library with NX console
      </p>

      {/* Pulsante */}
      <button className={styles.heroButton} onClick={() => alert('Button clicked!')}>
        Get Started
      </button>
    </section>
  );
};

export default Hero;
