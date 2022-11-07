import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function Slider({ topVideo }) {
  return (
    <div className="top-video-item">
      <a href={`https://www.youtube.com/watch?v=${topVideo.id}`}>
        <img
          src={topVideo.snippet.thumbnails.medium.url}
          alt={topVideo.snippet.title}
        />
        <p>{topVideo.snippet.title}</p>
      </a>
    </div>
  );
}

function YoutubeTopVideo({ topVideos }) {
  if (topVideos.length !== 0) {
    return (
      <div className="top-videos-slide">
        <div className="title">
          <h1>The Top 10 Videos</h1>
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={4}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slider topVideo={topVideos[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[5]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[6]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[7]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[8]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider topVideo={topVideos[9]} />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default YoutubeTopVideo;
