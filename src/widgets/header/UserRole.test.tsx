import { render, screen } from '@testing-library/react';

import UserRole from './UserRole';

describe('UserRole component', () => {
  it('UserRole renders', () => {
    const mockOnLogout = jest.fn();
    render(<UserRole hasNotifications={true} userRole='Client' onLogout={mockOnLogout} />);

    expect(screen.getByText('Client')).toBeInTheDocument();
  });
});
