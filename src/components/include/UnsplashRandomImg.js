import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

function Slider({ randomImg }) {
  return (
    <div className="random-img-item">
      <a href={randomImg.links.html}>
        <img src={randomImg.urls.regular} alt={randomImg.id} />
      </a>
    </div>
  );
}

function UnsplashRandomImg({ randomImgs }) {
  if (randomImgs.length !== 0) {
    return (
      <div className="random-img-slide">
        <span className="title">
          <h1>Random Splash</h1>
        </span>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slider randomImg={randomImgs[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[5]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[6]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[7]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[8]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slider randomImg={randomImgs[9]} />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default UnsplashRandomImg;
