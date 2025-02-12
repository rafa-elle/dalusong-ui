// Navbar.tsx
import React from 'react';
import styles from './navbar.module.css';
interface NavbarProps {
  links: { name: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav>
      {/* Render links */}
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;