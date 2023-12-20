import React from 'react';
import SwiperBrands from "../swiper/SwiperBrands";
import {useSelector} from "react-redux";

const BrandsProductSection = () => {
  const carts = useSelector(state => state.cartReducer.carts)
  console.log(carts)
  return (
    <section className={'brand-product-section'}>
      <div className="container">
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>
        <SwiperBrands carts={carts}/>

      </div>
    </section>
  );
};

export default BrandsProductSection;