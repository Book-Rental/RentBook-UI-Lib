import React, { useEffect, useState } from 'react';
import { Rb_Button, Rb_Input } from '../../atoms';

export interface QuantityProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
}

const Rb_Quantity: React.FC<QuantityProps> = ({
  value,
  onChange,
  min = 1,
  max,
  disabled = false,
  className = '',
  buttonClassName = '',
  inputClassName = '',
}) => {

  const [inputValue, setInputValue] = useState(String(value));


  useEffect(() => {
    setInputValue(String(value));
  }, [value]);


  const updateValue = (newValue:number) => {
    const integerValue = Math.floor(newValue);
    let finalValue = integerValue;
    if(finalValue < min){
      finalValue = min;
    }
    if(max !== undefined && finalValue > max){
      finalValue = max;
    }
    onChange(finalValue);
  };


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if(value === ''){
      setInputValue('');
      return;
    }
    if(/^\d+$/.test(value)){
      setInputValue(value);
    }
  };

  const handleBlur = () => {
    const numericValue = Number(inputValue);
    if(
      Number.isNaN(numericValue) ||
      numericValue < min
    ){
      setInputValue(String(value));
      return;
    }
    updateValue(numericValue);
  };

  return (
    <div
      className={`inline-flex items-center rounded-md border border-gray-300 overflow-hidden ${className}`}
    >
      <Rb_Button
        variant="outline"
        size="sm"
        disabled={
          disabled || value <= min
        }
        onClick={() =>
          updateValue(value - 1)}
        className={`!rounded-none !border-0 !border-r h-10 w-10 p-0 ${buttonClassName}`}
      >
        −
      </Rb_Button>
      <Rb_Input
        type="text"
        inputMode="numeric"
        value={inputValue}
        disabled={disabled}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`!w-14 !h-10 !m-0 !border-0 !rounded-none text-center ${inputClassName}`}
      />
      <Rb_Button
        variant="outline"
        size="sm"
        disabled={
          disabled ||
          (max !== undefined && value >= max)
        }
        onClick={() =>
          updateValue(value + 1)}
        className={` !rounded-none !border-0 !border-l h-10 w-10 p-0 ${buttonClassName}`}
      >
        +
      </Rb_Button>
    </div>
  );
};


export default Rb_Quantity;