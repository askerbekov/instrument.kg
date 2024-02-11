import React, {memo} from 'react';
import SwiperBrands from "../swiper/SwiperBrands";
import {useSelector} from "react-redux";

const BrandsProductSection = memo(() => {
  return (
    <section className={'brand-product-section'}>
      <div className="container-modified">
        <SwiperBrands  name={'Новинки'}/>
        <SwiperBrands name={'Акции'}/>
        <SwiperBrands />
        <SwiperBrands />
        <SwiperBrands />
        <SwiperBrands />
        <SwiperBrands />
        <SwiperBrands />
      </div>
    </section>
  );
});

export default BrandsProductSection;