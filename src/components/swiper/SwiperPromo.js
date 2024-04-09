import React, {memo} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperPromo.scss';
import PromoSlide from "./PromoSlide";


const SwiperPromo = memo(({promoProducts}) => {


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
                className={'promo-slide'}
              >
                <PromoSlide product={product}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
});

export default SwiperPromo;
