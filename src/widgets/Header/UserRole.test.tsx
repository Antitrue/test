import { render, screen } from '@testing-library/react';

import UserRole from './UserRole';

describe('UserRole component', () => {
  it('UserRole renders', () => {
    render(<UserRole hasNotifications={true} userRole='Client' />);

    expect(screen.getByText('Client')).toBeInTheDocument();
  });
});
