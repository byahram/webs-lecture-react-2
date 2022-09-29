import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieCont from "../include/MovieCont";
import { useState } from "react";
import { useEffect } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => (query) => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=11ddf22d9f842737f799d74032cf4628",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setMovies(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "Api"]} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
