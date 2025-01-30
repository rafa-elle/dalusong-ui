import { on } from 'events';
import styles from './button.module.css';

export function Button() {
  return (
    <a href='https://www.google.com'>
    <button className={styles.button}>
      Click me
    </button>
    </a>
  );
}

export default Button;
