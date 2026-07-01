import React, { forwardRef } from 'react';
import './Input.styles.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  borderClass?: string;
}

const Rb_Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', borderClass, error = false, ...props }, ref) => {
    const classes = [
      'w-full',
      'p-2',
      'mt-[10px]',
      'mb-[10px]',
      'box-border',
      'border',
      'bg-[var(--input-bg-color)]',
      'focus:bg-[var(--input-focus-bg-color)]',
      'text-[var(--text-color)]',
      'focus:outline-none',
      className,
      error
        ? 'border-[var(--input-error-border)] focus:border-[var(--input-error-border)]'
        : borderClass || 'border-[var(--input-border)] focus:border-[var(--input-focus-outline)]',
    ]
      .filter(Boolean)
      .join(' ');

    return <input ref={ref} className={classes} {...props} />;
  }
);

Rb_Input.displayName = 'Rb_Input';

export default Rb_Input;