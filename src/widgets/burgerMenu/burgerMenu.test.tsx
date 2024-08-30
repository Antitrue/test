import { render, screen } from '@testing-library/react';
import Header from './BurgerMenu';

describe('BurgerMenu component', () => {
  it('BurgerMenu renders', () => {
    render(<Header closeMenu={() => {}} burgerMenu />);

    expect(screen.getByText('Sign In'));
  });
});
