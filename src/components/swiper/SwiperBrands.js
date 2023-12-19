import React, {memo} from 'react';
import {Navigation, Mousewheel, Scrollbar, FreeMode} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import './swiperBrands.scss'
import {Link} from "react-router-dom";
import Product from "../poducts/Product";

const SwiperBrands = memo(({name}) => {
  return (
    <>
      <h2 className={'title-brands'}>
        <Link to={''} className={'section-title'}>
          {name || 'makita'}
        </Link>
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        navigation={true}
        mousewheel={{forceToAxis: true}}
        // direction={'horizontal'}
        freeMode={true}
        speed={700}
        // scrollbar={true}
        modules={[Navigation, Mousewheel, Scrollbar, FreeMode]}
        className="mySwiper miniSwiper"
      >
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>
        <SwiperSlide>
          <Product/>
        </SwiperSlide>

      </Swiper>
    </>
  );
});

export default SwiperBrands;