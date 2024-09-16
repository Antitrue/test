import { useState, useEffect } from 'react';

function useCreateModal(modalIsOpen: boolean) {
  const [modalWindow, setModalWindow] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let modal = null;

    if (modalIsOpen) {
      modal = document.createElement('div');
      modal.setAttribute('id', 'modal');
      document.body.appendChild(modal);
      setModalWindow(modal);

      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (modal) {
        document.body.removeChild(modal);
      }

      document.body.style.overflow = '';
    };
  }, [modalIsOpen]);

  return modalWindow;
}

export default useCreateModal;
