import { useCallback, useRef } from 'react';
import { clamp, percentToValue } from '../utils/math';

interface UseSliderProps {
    min: number;
    max: number;
    step: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
}

export const useSlider = ({
  min,
  max,
  step,
  value,
  onChange,
}: UseSliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const activeThumb = useRef<0 | 1 | null>(null);

  const calculateValue = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return null;

      const rect = trackRef.current.getBoundingClientRect();

      const percent = clamp(
        ((clientX - rect.left) / rect.width) * 100,
        0,
        100
      );

      let sliderValue = percentToValue(percent, min, max);

      sliderValue =
                Math.round(sliderValue / step) * step;

      return sliderValue;
    },
    [min, max, step]
  );

  const onPointerMove = useCallback(
    (event: PointerEvent) => {
      if (activeThumb.current === null) return;

      const sliderValue = calculateValue(event.clientX);

      if (sliderValue === null) return;

      const [minValue, maxValue] = value;

      if (activeThumb.current === 0) {
        onChange([
          Math.min(sliderValue, maxValue),
          maxValue,
        ]);
      } else {
        onChange([
          minValue,
          Math.max(sliderValue, minValue),
        ]);
      }
    },
    [calculateValue, value, onChange]
  );

  const stopDragging = useCallback(() => {
    activeThumb.current = null;

    window.removeEventListener(
      'pointermove',
      onPointerMove
    );

    window.removeEventListener(
      'pointerup',
      stopDragging
    );
  }, [onPointerMove]);

  const startDragging =
        (thumb: 0 | 1) =>
          (event: React.PointerEvent<HTMLDivElement>) => {
            event.preventDefault();

            activeThumb.current = thumb;

            window.addEventListener(
              'pointermove',
              onPointerMove
            );

            window.addEventListener(
              'pointerup',
              stopDragging
            );
          };

  return {
    trackRef,
    startDragging,
  };
};