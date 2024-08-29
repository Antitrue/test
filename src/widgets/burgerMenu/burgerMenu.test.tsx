import { render, screen } from '@testing-library/react';
import Header from './BurgerMenu';

describe('Header component', () => {
  it('Header renders', () => {
    render(<Header closeMenu={() => {}} burgerMenu />);

    expect(screen.getByText('Sign In'));
  });
});
