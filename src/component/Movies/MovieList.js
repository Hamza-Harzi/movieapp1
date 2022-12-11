import React from "react";
import FilmCard from "./FilmCard";

function MovieList({ movies }) {
  return (
    <div className="all-movies">
      {movies.map((item) => {
        return <FilmCard key={item.id} filmCart={item} />;
      })}
    </div>
  );
}

export default MovieList;
