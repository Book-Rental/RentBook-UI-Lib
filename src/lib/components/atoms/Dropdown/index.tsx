import React from 'react';
import './Dropdown.styles.scss';

import { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder = 'Select',
  options,
  value = '',
  disabled = false,
  required = false,
  onChange,
}) => {
  return (
    <div className="dropdown">
      {label && (
        <label className="dropdown__label">
          {label}
          {required && <span className="dropdown__required">*</span>}
        </label>
      )}

      <select
        className="dropdown__select"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;