import React, { forwardRef } from "react";
import "./Input.styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Rb_Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error = false, ...props }, ref) => {
    const baseStyles =
      "w-full p-2 mt-[10px] mb-[10px] box-border border";

    const stateStyles = error
      ? "border-red-500 outline-red-500 focus:outline-red-500"
      : "border-black outline-black-700 focus:outline-blue-700";

    return (
      <input
        ref={ref}
        className={`${baseStyles} ${stateStyles} ${className}`}
        {...props}
      />
    );
  }
);

Rb_Input.displayName = "Rb_Input";

export default Rb_Input;