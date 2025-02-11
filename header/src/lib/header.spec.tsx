// libs/header/src/lib/header.spec.tsx
import { render } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  const mockProps = {
    title: 'Library Example',
    logoUrl: '/path/to/logo.png',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  it('should render successfully', () => {
    const { baseElement } = render(<Header {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });
});