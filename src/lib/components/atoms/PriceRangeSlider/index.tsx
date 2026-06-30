import "./PriceRangeSlider.styles.scss";

import { valueToPercent } from "./utils/math";
import { useSlider } from "./hooks/useSlider";

import Track from "./components/Track";
import Thumb from "./components/Thumb";
import Tooltip from "./components/Tooltip";

import { PriceRangeSliderProps } from './PriceRangeSlider.types';

const PriceRangeSlider = ({
    min,
    max,
    value,
    step = 1,
    currency = "₹",
    showTooltip = true,
    onChange,
}: PriceRangeSliderProps) => {
    const [minValue, maxValue] = value;

    const left = valueToPercent(
        minValue,
        min,
        max
    );

    const right = valueToPercent(
        maxValue,
        min,
        max
    );

    const { trackRef, startDragging } =
        useSlider({
            min,
            max,
            step,
            value,
            onChange,
        });

    return (
        <div className="price-slider">
            <div className="price-slider__container">

                <Track
                    left={left}
                    right={right}
                    trackRef={trackRef}
                />

                {showTooltip && (
                    <>
                        <Tooltip
                            left={left}
                            value={`${currency}${minValue}`}
                        />

                        <Tooltip
                            left={right}
                            value={`${currency}${maxValue}`}
                        />
                    </>
                )}

                <Thumb
                    left={left}
                    onPointerDown={startDragging(0)}
                />

                <Thumb
                    left={right}
                    onPointerDown={startDragging(1)}
                />

            </div>
        </div>
    );
};

export default PriceRangeSlider;