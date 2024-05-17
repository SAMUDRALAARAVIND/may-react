import { useState } from "react";
import "./rating.scss";
import { Button } from "antd";

const Star = ({ selected, rating, setRating }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={80}
      height={80}
      strokeWidth={0}
      fill={selected ? "orange" : "#e3e3e3"}
      onClick={() => setRating(rating)}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

const Rating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div className="container">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Star
              key={item}
              rating={item}
              setRating={setRating}
              selected={item <= rating}
            />
          );
        })}
      </div>
      {rating > 0 && (
        <Button onClick={() => setRating(0)} type="link">
          Clear Rating...
        </Button>
      )}
    </div>
  );
};

export default Rating;
