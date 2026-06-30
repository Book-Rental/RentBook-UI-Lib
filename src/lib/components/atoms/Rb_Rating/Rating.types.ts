export interface RatingProps {
    value: number;
    max?: number;
    size?: number;
    color?: string;
    emptyColor?: string;
    readOnly?: boolean;
    className?: string;
    onChange?: (value: number) => void;
}