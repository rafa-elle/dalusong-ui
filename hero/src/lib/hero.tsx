import React from 'react';
import styles from './hero.module.css';
import { Button } from '@dalusong-ui/button';

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
      <Button onClick={() => alert('Button clicked!')}>
        Get Started
      </Button>
    </section>
  );
};

export default Hero;
