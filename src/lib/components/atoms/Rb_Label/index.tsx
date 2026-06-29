import React from "react";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

const Rb_Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  className = "",
  required = false,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className}`}
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
};

export default Rb_Label;