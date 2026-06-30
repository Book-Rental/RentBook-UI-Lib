import React from 'react';

import './PriceRangeSlider.styles.scss';

import { PriceRangeSliderProps } from './PriceRangeSlider.types';

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({

  min,

  max,

  value,

  step = 1,

  disabled = false,

  showLabels = true,

  showValues = true,

  onChange,

}) => {

  const [minValue, maxValue] = value;

  const left =
        ((minValue - min) / (max - min)) * 100;

  const right =
        ((maxValue - min) / (max - min)) * 100;

  return (

    <div className="price-slider">

      {showValues && (

        <div className="price-slider__values">

          <span>₹{minValue}</span>

          <span>₹{maxValue}</span>

        </div>

      )}

      <div className="price-slider__container">

        <div className="price-slider__track" />

        <div
          className="price-slider__range"
          style={{
            left: `${left}%`,
            width: `${right - left}%`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          disabled={disabled}
          onChange={(e) =>
            onChange([
              Math.min(Number(e.target.value), maxValue),
              maxValue,
            ])}
          className="thumb thumb--left"
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          disabled={disabled}
          onChange={(e) =>
            onChange([
              minValue,
              Math.max(Number(e.target.value), minValue),
            ])}
          className="thumb thumb--right"
        />

      </div>

      {showLabels && (

        <div className="price-slider__labels">

          <span>₹{min}</span>

          <span>₹{max}</span>

        </div>

      )}

    </div>

  );

};

export default PriceRangeSlider;