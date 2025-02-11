// apps/example-app/src/App.tsx
import React from 'react';
import Header from '../header/src/lib/header';
import Hero from '../hero/src/lib/hero';
import Navbar from '../navbar/src/lib/navbar';
import Button from '../button/src/lib/Button';

const App = () => {
  const headerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  interface HeaderProps {
    title: string;
    logoUrl: string;
    links: { name: string; href: string }[];
  }

  return (
    <div>
      {/* Header */}
      <Header title="MyWebsite" logoUrl="/path/to/logo.png" links={headerLinks} />

      {/* Navbar */}
      <Navbar links={headerLinks} />

      {/* Hero */}
      <Hero
        title="Welcome to My Website"
        subtitle="This is a simple hero section with a title, description, and a button."
        backgroundImage="/path/to/hero-image.jpg"
      >
        <Button onClick={() => alert('Button clicked!')}>Get Started</Button>
      </Hero>

      {/* Altri contenuti */}
      <main style={{ padding: '2rem' }}>
        <h2>Other Content</h2>
        <p>This is the rest of your website content.</p>
      </main>
    </div>
  );
};

export default App;