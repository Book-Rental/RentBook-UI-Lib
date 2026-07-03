import React from 'react';
import './ModalFooter.styles.scss';
import { ModalFooterProps } from './ModalFooter.types';

const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`modal-footer ${className}`}>
      {children}
    </div>
  );
};

export default ModalFooter;