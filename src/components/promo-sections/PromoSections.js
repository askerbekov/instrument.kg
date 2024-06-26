import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPromoProducts} from "../../redux/action/promorProductsAction";
import SwiperPromo from "../swiper/SwiperPromo";
import './promoSection.scss'
import SwiperBestseller from "../swiper/SwiperBestseller/swiperBestseller";
import Advertisement from "../advertisement/Advertisement";

const PromoSections = ({}) => {
  const dispatch = useDispatch()
  const promoProducts = useSelector(state => state.promoProductReducer.promoProducts)

  useEffect(() => {
    dispatch(getPromoProducts())
  },[])


  return (
    <section className={'promo-section'}>
      <div className="container">
        <div className={'promo-block'}>
          <div className={'swiper-promo'}>
            <SwiperPromo promoProducts={promoProducts}/>
          </div>
          <Advertisement/>
          {/*<div className={'swiper-bestseller'}>*/}
          {/*  <h2>Товары дня</h2>*/}
          {/*  <SwiperBestseller/>*/}
          {/*</div>*/}
        </div>

      </div>
    </section>
  );
};

export default PromoSections;