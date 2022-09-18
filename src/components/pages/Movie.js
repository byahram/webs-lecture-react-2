import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import MovieCont from "../include/MovieCont";

function Movie() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "Api"]} />
        <MovieCont />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
