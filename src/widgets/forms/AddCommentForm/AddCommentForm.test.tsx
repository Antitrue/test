import { render, screen, fireEvent } from '@testing-library/react';
import AddCommentForm from './AddCommentForm';

const mockHandleAddComment = jest.fn();

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

describe('AddCommentForm', () => {
  beforeEach(() => {
    mockHandleAddComment.mockClear();
  });

  it('AddCommentForm renders', () => {
    render(<AddCommentForm handleAddComment={mockHandleAddComment} />);

    const inputElement = screen.getByPlaceholderText('Add a comment...');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /send/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('does not call handleAddComment if the input is empty or only contains spaces', () => {
    render(<AddCommentForm handleAddComment={mockHandleAddComment} />);

    const inputElement = screen.getByPlaceholderText('Add a comment...');
    fireEvent.change(inputElement, { target: { value: '    ' } });

    const buttonElement = screen.getByRole('button', { name: /send/i });
    fireEvent.click(buttonElement);

    expect(mockHandleAddComment).not.toHaveBeenCalled();
    expect(inputElement).toHaveValue('    ');
  });
});
