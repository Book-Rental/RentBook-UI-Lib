import React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'small';
}

const Rb_Text: React.FC<TextProps> = ({
  children,
  variant = 'p',
  className = '',
  ...props
}) => {
  const styles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
    span: 'text-base',
    small: 'text-sm text-gray-500',
  };

  const Component = variant;

  return (
    <Component
      className={`${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Rb_Text;