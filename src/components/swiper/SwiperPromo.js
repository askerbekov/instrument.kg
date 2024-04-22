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
        // cssMode={true}
        // navigation={true}
        // keyboard={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={600}
        // mousewheel={{forceToAxis: true}}
        loop={true}
        initialSlide={promoProducts.length - 1}
        modules={[Pagination,  Autoplay]} //Mousewheel, Keyboard,Navigation
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
