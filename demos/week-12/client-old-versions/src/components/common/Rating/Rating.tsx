import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

import "./Rating.css";

type Props = {
    size: "sm" | "md" | "lg";
    color: string;
    value: number;
    numRatings: number;
};

const Rating = ({ size, color, value, numRatings }: Props) => {
    const fullStars = Math.floor(value);
    const halfStars = value - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStars);

    // console.log(fullStars, halfStars, emptyStars);

    return (
        <span className={`rating-${size}`}>
            <span style={{ color: color }}>
                {Array(fullStars)
                    .fill(1)
                    .map((item) => (
                        <FontAwesomeIcon icon={faStar} />
                    ))}
                {Array(halfStars)
                    .fill(1)
                    .map((item) => (
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    ))}
                {Array(emptyStars)
                    .fill(1)
                    .map((item) => (
                        <FontAwesomeIcon icon={faStarEmpty} />
                    ))}
            </span>
            {value} ({numRatings} rated)
        </span>
    );
};

Rating.defaultProps = {
    color: "goldenrod",
    size: "md",
};

export default Rating;
