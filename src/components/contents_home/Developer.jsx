import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { developerText } from "../../data/developer";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Developer = () => {
  return (
    <section id="developer">
      <h2>😪 추천 개발자를 소개합니다.</h2>
      <div className="developer__inner">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          slidesPerView={8}
          spaceBetween={20}
          breakpoints={{
            100: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {developerText.map((developer, key) => (
            <SwiperSlide key={key}>
              <div className="developer">
                <div className="developer__img play__icon">
                  <Link to={`/channel/${developer.channelId}`}>
                    <img src={developer.img} alt={developer.name} />
                  </Link>
                </div>
                <div className="developer__info">
                  <Link to={`/channel/${developer.channelId}`}>
                    {developer.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Developer;
