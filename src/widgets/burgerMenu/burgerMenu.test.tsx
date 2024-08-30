import { render, screen } from '@testing-library/react';
import BurgerMenu from './BurgerMenu';

describe('BurgerMenu component', () => {
  it('BurgerMenu renders', () => {
    render(<BurgerMenu closeMenu={() => {}} burgerMenu />);

    expect(screen.getByText('Sign In'));
  });
});
