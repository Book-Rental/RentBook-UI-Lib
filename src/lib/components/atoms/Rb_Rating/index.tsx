import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { RatingProps } from "./Rating.types";
import "./Rating.styles.scss";

const Rb_Rating: React.FC<RatingProps> = ({
    value,
    max = 5,
    size = 20,
    color = "#facc15",
    emptyColor = "#d1d5db",
    readOnly = true,
    className = "",
    onChange,
}) => {
    return (
        <div className={`rb-rating ${className}`}>
            {Array.from({ length: max }, (_, index) => {
                const ratingValue = index + 1;

                let StarIcon;

                if (ratingValue <= Math.floor(value)) {
                    StarIcon = FaStar;
                } else if (ratingValue === Math.floor(value) + 1 && value % 1 !== 0) {
                    StarIcon = FaStarHalfAlt;
                } else {
                    StarIcon = FaRegStar;
                }

                return (
                    <span
                        key={ratingValue}
                        role={!readOnly ? "button" : undefined}
                        aria-label={`Rate ${ratingValue} star${ratingValue > 1 ? "s" : ""}`}
                        className={`rb-rating-star ${!readOnly ? "clickable" : ""}`}
                        onClick={() => {
                            if (!readOnly && onChange) {
                                onChange(ratingValue);
                            }
                        }}
                    >
                        <StarIcon
                            size={size}
                            color={StarIcon === FaRegStar ? emptyColor : color}
                        />
                    </span>
                );
            })}
        </div>
    );
};

export default Rb_Rating;