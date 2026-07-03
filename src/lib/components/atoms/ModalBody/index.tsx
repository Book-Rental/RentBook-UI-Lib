import React from 'react';
import './ModalBody.styles.scss';

import { ModalBodyProps } from './ModalBody.types';

const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`modal-body ${className}`}>
      {children}
    </div>
  );
};

export default ModalBody;