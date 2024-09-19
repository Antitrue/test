import { render, screen, fireEvent } from '@testing-library/react';
import RegForm from './RegForm';
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

describe('RegForm', () => {
  it('RegForm renders', () => {
    render(
      <MemoryRouter>
        <RegForm />
      </MemoryRouter>
    );

    expect(screen.getByText('Create an Account')).toBeInTheDocument();

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Adress')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByLabelText(/I have read and agree to the/)).toBeInTheDocument();
  });
  it('should show validation error for required fields', async () => {
    render(
      <MemoryRouter>
        <RegForm />
      </MemoryRouter>
    );

    const fullNameInput = screen.getByPlaceholderText('John Doe');
    const emailInput = screen.getByPlaceholderText('johndoe@gmail.com');
    const passwordInput = screen.getAllByPlaceholderText('*******')[0];

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
  });
});
