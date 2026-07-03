import React from 'react';
import './ModalHeader.styles.scss';
import { ModalHeaderProps } from './ModalHeader.types';
import Rb_Icon from '../Rb_Icon';
import { TfiClose } from 'react-icons/tfi';

const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  onClose,
  className = '',
  closeButtonClassName = '',
  iconClassName = '',
}) => {
  return (
    <div className={`modal-header ${className}`}>
      <div className="modal-header_title">
        {children}
      </div>

      <button
        type="button"
        className={`modal-header_close ${closeButtonClassName}`}
        onClick={onClose}
        aria-label="Close modal"
      >
        <Rb_Icon
          icon={TfiClose}
          size={18}
          className={iconClassName}
        />
      </button>
    </div>
  );
};

export default ModalHeader;