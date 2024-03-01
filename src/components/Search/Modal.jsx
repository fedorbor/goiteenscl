import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imageURL} alt="" className={styles.modalImage} />
      </div>
    </div>
  );
};

export default Modal;