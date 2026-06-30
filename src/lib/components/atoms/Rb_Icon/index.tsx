import React from 'react';
import { IconProps } from './Icon.types';
import './Icon.styles.scss';

const Rb_Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 20,
  color,
  className = '',
  ...props
}) => {
  return (
    <span className={`rb-icon ${className}`} {...props}>
      <IconComponent size={size} color={color} />
    </span>
  );
};

export default Rb_Icon;