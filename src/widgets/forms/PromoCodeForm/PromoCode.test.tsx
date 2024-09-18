import { render } from '@testing-library/react';

import PromoCodeForm from './PromoCodeForm';

describe('PromoCodeForm', () => {
  it('Компонент рендирится', () => {
    const { getByPlaceholderText, getByRole } = render(<PromoCodeForm />);

    expect(getByPlaceholderText('email')).toBeInTheDocument();
    expect(getByRole('button', { name: /Отправить/i })).toBeInTheDocument();
  });
});
