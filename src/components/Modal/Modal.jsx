import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, tags, onClose }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div className={css.Backdrop} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img className={css.ModalImg} src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};
