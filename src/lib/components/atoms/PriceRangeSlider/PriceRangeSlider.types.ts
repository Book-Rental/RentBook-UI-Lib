export interface PriceRangeSliderProps {

    min:number;

    max:number;

    value:[number,number];

    step?:number;

    disabled?:boolean;

    showLabels?:boolean;

    showValues?:boolean;

    onChange:(value:[number,number])=>void;

}