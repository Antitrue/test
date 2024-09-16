import { render, screen } from '@testing-library/react';
import Header from './header';

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

describe('Header component', () => {
  it('Header renders', () => {
    render(
      <MemoryRouter>
        <Header userLogged={false} />
      </MemoryRouter>
    );

    expect(screen.getByText('Register' || 'Аккаунт'));
  });
});
