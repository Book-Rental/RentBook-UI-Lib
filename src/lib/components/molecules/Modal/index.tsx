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
}) => {
  if (!isOpen) {
    return null;
  }

  const modalRef = useRef<HTMLDivElement>(null);
  const hasHeader = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      child.type === ModalHeader
  );

  return ReactDOM.createPortal(
    <FocusTrap
      focusTrapOptions={{
        fallbackFocus: () => modalRef.current!,
      }}
    >
      <div className="modal-overlay">
        <div
          ref={modalRef}
          className={`modal ${className}`}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          {!hasHeader && (
            <button
              type="button"
              className="modal_fallback-close"
              onClick={onClose}
              aria-label="Close modal"
            >
              <Rb_Icon
                icon={TfiClose}
                size={18}
              />
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