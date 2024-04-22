import React from 'react';
import DiscountSwiper from "../swiper/discount-swiper/DiscountSwiper";
import './discount-section.scss'

const DiscountSection = () => {
  return (
    <div className={'discount-section'}>
      <div className="container">
        <div className="discount-section-box">
          <div className={'discount-text'}>
            Наши товары по скидки
          </div>
          <DiscountSwiper/>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;