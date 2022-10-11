import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Slider({ topMovie }) {
  if (topMovie !== undefined) {
    return (
      <div className="top-movie-item">
        <a href={`https://www.themoviedb.org/movie/${topMovie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${topMovie.poster_path}`}
            alt={topMovie.title}
          />
          <h3>{topMovie.title}</h3>
          <p>Rating: {topMovie.vote_average}</p>
        </a>
      </div>
    );
  } else {
    return;
  }
}

function MoviesTopRated({ topMovies }) {
  return (
    <div className="top-movies-slide">
      <div className="title">
        <h1>The Top 10 Rated Movies</h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider topMovie={topMovies[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[6]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[7]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[8]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider topMovie={topMovies[9]} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MoviesTopRated;
