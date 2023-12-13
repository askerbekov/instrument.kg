import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPromoProducts} from "../../redux/action/promorProductsAction";
import SwiperPromo from "../swiper/SwiperPromo";

const PromoSections = () => {
  const dispatch = useDispatch()
  const promoProducts = useSelector(state => state.promoProductReducer.promoProducts)

  useEffect(() => {
    dispatch(getPromoProducts())
  },[])


  return (
    <section className={'action-products'}>
      <div className="container">
        <SwiperPromo promoProducts={promoProducts}/>
      </div>
    </section>
  );
};

export default PromoSections;