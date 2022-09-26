import React from "react";

function MovieItem(props) {
  return (
    <li>
      <a href="/">
        <img
          className="movieitem_img"
          src={`https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`}
          alt={props.movies.title}
        />
        <h2>{props.movies.title}</h2>
        <p>{props.movies.release_date}</p>
      </a>
    </li>
  );
}

function MovieList(props) {
  // console.log(props);
  return (
    <div className="movie__list">
      <ul>
        {props.movies.map((movies, index) => (
          <MovieItem key={index} movies={movies} />
        ))}
      </ul>
    </div>
  );
}

function MovieCont({ movies }) {
  // console.log(movies);
  return (
    <div className="movie__cont">
      <div className="container">
        <div className="movie__inner">
          {/* <MovieSearch onSearch={search} /> */}
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default MovieCont;
