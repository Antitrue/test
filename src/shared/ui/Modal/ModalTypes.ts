import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  className?: string;
  modalIsOpen: boolean;
  closeModal: () => void;
};
