import React from "react";
import StarRating from "../component/Movies/StarRating";

function Header(props) {
  return (
    <div className="header">
      <h1>Movie App</h1>
      <div className="select-movie">
        <div className="select-movie">
          <input
            style={{ width: "300px", height: "25px", borderRadius: "5px" }}
            type="text"
            placeholder="Entert your favotite film"
            onChange={props.handleSearchInput}
          />

          <StarRating rating={props.rating} setRating={props.setRating} />
        </div>

        <button
          onClick={() => props.setModal(true)}
          type="submit"
          style={{ color: "white", fontSize: "15px" }}
        >
          Add movie
        </button>
      </div>
    </div>
  );
}

export default Header;
