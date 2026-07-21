import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './Modal.styles.scss';
import { ModalProps } from './Modal.types';
import ModalHeader from '../../atoms/ModalHeader';
import Rb_Icon from '../../atoms/Rb_Icon';
import { TfiClose } from 'react-icons/tfi';
import FocusTrap from 'focus-trap-react';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
  closeOnEsc = true,
  closeOnOverlayClick = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null); 

  if (!isOpen) {
    return null;
  }

  const hasHeader = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === ModalHeader
  );

  const handleOverlayMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (closeOnEsc && e.key === 'Escape') {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <FocusTrap focusTrapOptions={{ fallbackFocus: () => modalRef.current! }}>
      <div className="modal-overlay" onMouseDown={handleOverlayMouseDown}>
        <div
          ref={modalRef}
          className={`modal ${className}`}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          {!hasHeader && (
            <button
              type="button"
              className="modal_fallback-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <Rb_Icon icon={TfiClose} size={18} />
            </button>
          )}
          {children}
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};

export default Modal;



