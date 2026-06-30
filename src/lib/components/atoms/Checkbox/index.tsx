import React from 'react';
import './Checkbox.styles.scss';

import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  disabled = false,
  onChange,
}) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />

      <span className="checkbox__custom"></span>

      {label && (
        <span className="checkbox__label">
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;