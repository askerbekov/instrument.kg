import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPromoProducts} from "../../redux/action/promorProductsAction";
import SwiperPromo from "../swiper/SwiperPromo";
import './actionProducts.scss'
import {Skeleton} from "@mui/material";

const PromoSections = ({loading}) => {
  const dispatch = useDispatch()
  const promoProducts = useSelector(state => state.promoProductReducer.promoProducts)

  useEffect(() => {
    dispatch(getPromoProducts())
  },[])


  return (
    <section className={'action-products'}>
      <div className="container">
        <SwiperPromo promoProducts={promoProducts} loading={loading}/>
      </div>
    </section>
  );
};

export default PromoSections;