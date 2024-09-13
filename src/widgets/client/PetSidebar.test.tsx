import { render, screen } from '@testing-library/react';

import PetSidebar from './PetSidebar';
import { defaultCat } from '../../shared/assets/';

const pets = [
  {
    name: 'Черничка',
    icon: <img src={defaultCat} />,
  },
];

describe('PetSidebar component', () => {
  it('PetSidebar renders', () => {
    render(<PetSidebar pets={pets} />);

    expect(screen.getByText('Черничка')).toBeInTheDocument();
  });
});
