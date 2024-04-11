import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import hilti from '../../assets/hilti.jpg'
import './style.scss'

const SwiperBestseller = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={hilti} alt=""/></SwiperSlide>
        <SwiperSlide><img src={hilti} alt=""/></SwiperSlide>
        <SwiperSlide><img src={hilti} alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperBestseller;