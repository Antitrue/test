import { createPortal } from 'react-dom';
import cn from 'classnames';

import Overlay from '../Overlay/Overlay';

import useCreateModal from '../../hooks/useCreateModal';
import { ModalProps } from './ModalTypes';
import styles from './Modal.module.scss';

function Modal({ children, modalIsOpen, closeModal, className = '' }: ModalProps) {
  const modalWindow = useCreateModal(modalIsOpen);

  return modalWindow && modalIsOpen
    ? createPortal(
        <>
          <div className={cn(styles.modal, className)}>{children}</div>
          <Overlay onClose={closeModal} />
        </>,
        modalWindow
      )
    : null;
}

export default Modal;
