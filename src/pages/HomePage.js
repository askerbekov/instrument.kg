import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import PromoSections from "../components/promoSections/PromoSections";
import BrandsProductSection from "../components/sections Brands Products/BrandsProductSection";
import {useDispatch, useSelector} from "react-redux";
import ChekBackEnd from "../components/ChekBackEnd";
import {getProducts} from "../redux/action/getProductsAction";

const HomePage = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.productsReducer.loading)

  useEffect(() => {
    dispatch(getProducts())
    // dispatch({type:"CLEAR"})
  },[])
  return (
    <Layout>
      {/*<ChekBackEnd/>*/}
      <PromoSections loading={loading}/>
      <BrandsProductSection/>
    </Layout>
  );
};

export default HomePage;