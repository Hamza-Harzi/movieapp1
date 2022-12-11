import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./component/Movies/MovieList";

import Header from "./component/Header";

import ModalComponent from "./component/Modal";

import filmsData from "./Data";

function App() {
  const films = filmsData;
  const [movies, setmovies] = useState(films);
  const [rating, setRating] = useState(5);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const filteFilms = films.filter((film) => {
      return film.rate >= rating;
    });

    setmovies(filteFilms);
  }, [rating]);

  const addMovie = (movieName, picture, description) => {
    films.push({
      id: films.length + 1,
      title: movieName,
      poster: picture,
      decription: description,
      rate: 5,
    });

    const filteFilms = films.filter((film) => {
      return film.rate >= rating;
    });

    setmovies(filteFilms);
    setModal(false);
  };
  const handleSearchInput = (e) => {
    const filteFilms = films.filter((film) => {
      return (
        film.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });

    setmovies(filteFilms);
  };

  return (
    <div className="App">
      <Header
        handleSearchInput={handleSearchInput}
        rating={rating}
        setRating={setRating}
        setModal={setModal}
      />
      <MovieList movies={movies} />
      {modal && <ModalComponent setModal={setModal} addMovie={addMovie} />}
    </div>
  );
}

export default App;
