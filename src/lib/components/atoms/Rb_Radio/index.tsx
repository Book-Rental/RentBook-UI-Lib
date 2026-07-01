import React from "react";
import "./Radio.styles.scss";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  radioSize?: "sm" | "md" | "lg";
}

const Rb_Radio: React.FC<RadioProps> = ({
  label,
  radioSize = "md",
  className = "",
  ...props
}) => {
  return (
    <label className={`radio-wrapper radio-${radioSize} ${className}`}>
      <input type="radio" {...props} />
      <span className="custom-radio"></span>

      {label && <span className="radio-label">{label}</span>}
    </label>
  );
};

export default Rb_Radio;