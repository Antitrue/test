import { render, screen } from '@testing-library/react';
import ProfileForm from './profileForm';

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

describe('ProfileForm component', () => {
  it('ProfileForm renders', () => {
    render(
      <MemoryRouter>
        <ProfileForm />
      </MemoryRouter>
    );

    expect(screen.getByText('Change Password'));
  });
});
