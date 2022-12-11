import React, { useState } from "react";
import StarRating from "./StarRating";

function FilmCard({ filmCart }) {
  const [rating, setRating] = useState(filmCart.rate);
  return (
    <div className="film-cart">
      <ul>
        <li>{filmCart.title}</li>
        <li>
          <img src={filmCart.poster} alt="" style={{ width: "100px" }} />
        </li>
        <li>{filmCart.decription}</li>
        <li>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= rating ? "on" : "off"}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default FilmCard;

// <span
//           class=""
//           data-index="0"
//           data-forhalf="★"
//           style={{
//             position: "relative",
//             overflow: "hidden",
//             cursor: "default",
//             display: "block",
//             float: "left",
//             color: "rgb(255, 215, 0)",
//             fontSize: "24px",
//           }}
//         >
//           ★★★
//         </span>
