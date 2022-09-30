import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieCont from "../include/MovieCont";
import MovieSearch from "../include/MovieSearch";
import { useState, useEffect } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=11ddf22d9f842737f799d74032cf4628&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=11ddf22d9f842737f799d74032cf4628&query=family"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "Api"]} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
