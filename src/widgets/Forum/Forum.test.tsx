import { render, screen } from '@testing-library/react';

import Forum from './Forum';

describe('Forum widgets', () => {
  test('Forum renders', () => {
    render(<Forum />);

    expect(screen.getByText('Форум')).toBeInTheDocument();
  });
});
