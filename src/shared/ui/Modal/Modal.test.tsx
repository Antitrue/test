import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  const renderModal = (modalIsOpen: boolean) =>
    render(
      <Modal modalIsOpen={modalIsOpen} closeModal={() => {}}>
        <div>test</div>
      </Modal>
    );

  it('Компонент рендерится с children', () => {
    const { getByText } = renderModal(true);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('Компонент не рендерится с children', () => {
    const { queryByText } = renderModal(false);
    expect(queryByText('test')).not.toBeInTheDocument();
  });

  it('Срабатыает блокировка прокрутки', () => {
    renderModal(true);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('Блокировка не срабатывает', () => {
    renderModal(false);
    expect(document.body.style.overflow).toBe('');
  });
});
