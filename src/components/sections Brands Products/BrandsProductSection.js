import React, {memo} from 'react';
import SwiperBrands from "../swiper/SwiperBrands";
import {useSelector} from "react-redux";

const BrandsProductSection = memo(() => {
  return (
    <section className={'brand-product-section'}>
      <div className="container">
        <SwiperBrands  name={'Новинки'}/>
        <SwiperBrands  name={'Отделочные инструменты'}/>
        <SwiperBrands  name={'Автомобильные инструменты'}/>
        <SwiperBrands  name={'Отделочные инструменты'}/>
        <SwiperBrands name={'Измерительные инструменты'}/>
        <SwiperBrands name={'Садовая инвентарь'}/>
        {/*<SwiperBrands />*/}
      </div>
    </section>
  );
});

export default BrandsProductSection;