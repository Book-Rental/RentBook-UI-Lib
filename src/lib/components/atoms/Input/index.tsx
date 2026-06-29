import React, { forwardRef } from "react";
import "./Input.styles.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border border-black w-full p-2 mt-[10px] mb-[10px] box-border - ${className}`}
        {...props}
      />
    );
  }
);

export default Input;