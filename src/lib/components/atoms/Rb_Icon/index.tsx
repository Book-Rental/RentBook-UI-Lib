import React from 'react';
import { IconProps } from './Icon.types';

const Rb_Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 20,
  color,
  className = '',
  ...props
}) => {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}
    >
      <IconComponent size={size} color={color} />
    </span>
  );
};

export default Rb_Icon;