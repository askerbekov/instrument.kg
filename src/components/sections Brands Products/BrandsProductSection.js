import React, {memo} from 'react';
import SwiperBrands from "../swiper/SwiperBrands";
import {useSelector} from "react-redux";

const BrandsProductSection = memo(() => {
  return (
    <section className={'brand-product-section'}>
      <div className="container">
        <SwiperBrands  name={'Новинки'}/>
        <SwiperBrands name={'Акции'}/>
        <SwiperBrands name={'Хит товары'}/>
        {/*<SwiperBrands />*/}
      </div>
    </section>
  );
});

export default BrandsProductSection;