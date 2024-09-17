import { render, fireEvent } from '@testing-library/react';
import Overlay from './Overlay';

jest.mock('./Overlay.module.scss', () => ({
  __esModule: true,
  default: {
    overlay: 'overlay',
  },
}));

describe('Overlay', () => {
  const overlayFn = (onClose: () => void = () => {}) => render(<Overlay onClose={onClose} />);

  it('Cрабатывает затемнение', () => {
    const { container } = overlayFn();
    expect(container.querySelector('.overlay')).toBeInTheDocument();
  });

  it('Срабатывает клик по overlay', () => {
    const onClose = jest.fn();

    const { container } = overlayFn(onClose);

    const overlay = container.querySelector('.overlay');
    if (overlay) {
      fireEvent.click(overlay);
      expect(onClose).toHaveBeenCalledTimes(1);
    }
  });
});
