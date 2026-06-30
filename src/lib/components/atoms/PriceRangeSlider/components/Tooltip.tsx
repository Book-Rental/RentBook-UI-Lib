
interface TooltipProps {
    left: number;
    value: string;
}

const Tooltip = ({ left, value }: TooltipProps) => {
    return (
        <div
            className="slider-tooltip"
            style={{
                left: `${left}%`,
            }}
        >
            {value}
        </div>
    );
};

export default Tooltip;