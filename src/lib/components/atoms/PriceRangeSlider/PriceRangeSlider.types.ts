export interface PriceRangeSliderProps {
    min: number;
    max: number;
    value: [number, number];
    step?: number;
    currency?: string;
    showTooltip?: boolean;
    showTicks?: boolean;
    marks?: number[];
    disabled?: boolean;
    onChange: (value: [number, number]) => void;
}