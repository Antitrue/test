import { render, screen } from '@testing-library/react';
import BurgerMenu from './BurgerMenu';

import { MemoryRouter } from 'react-router-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('BurgerMenu component', () => {
  it('BurgerMenu renders', () => {
    render(
      <MemoryRouter>
        <BurgerMenu closeMenu={() => {}} burgerMenu />
      </MemoryRouter>
    );

    expect(screen.getByText('Sign In'));
  });
});
