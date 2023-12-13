import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperPromo.scss';




const SwiperPromo = ({promoProducts}) => {
  console.log(promoProducts)

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={200}
        mousewheel={{forceToAxis: true}}
        loop={true}
        initialSlide={promoProducts.length - 1}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {
          promoProducts?.map(product => {
            return (
              <SwiperSlide
                key={product.id}
                className={''}
              >
                <img className={'img-promo'} src={product.thumbnail} alt=""/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}

export default SwiperPromo;
