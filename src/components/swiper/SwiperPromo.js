import React, {memo} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperPromo.scss';
import {Skeleton} from "@mui/material";


const SwiperPromo = memo(({promoProducts, loading}) => {

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        keyboard={true}
        autoplay={{
          delay: 40500,
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
        className="mySwiper promo-Swiper"
      >
        {
          promoProducts?.map(product => {
            return (
              <SwiperSlide
                key={product.id}
                className={''}
              >
                <img className={'img-promo'} src={'https://picsum.photos/1920/1440'} alt=""/>
                <h2 className={'description'}>{product.description}</h2>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
});

export default SwiperPromo;
