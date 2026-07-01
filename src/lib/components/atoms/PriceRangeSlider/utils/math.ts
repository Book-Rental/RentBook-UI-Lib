export const valueToPercent = (
  value: number,
  min: number,
  max: number
) => ((value - min) / (max - min)) * 100;

export const percentToValue = (
  percent: number,
  min: number,
  max: number
) => Math.round(min + ((max - min) * percent) / 100);

export const clamp = (
  value: number,
  min: number,
  max: number
) => Math.min(Math.max(value, min), max);