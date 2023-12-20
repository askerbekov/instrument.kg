import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import PromoSections from "../components/promoSections/PromoSections";
import BrandsProductSection from "../components/sections Brands Products/BrandsProductSection";
import {useDispatch} from "react-redux";
import ChekBackEnd from "../components/ChekBackEnd";
import {getProducts} from "../redux/action/getProductsAction";

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    // dispatch({type:"CLEAR"})
  },[])
  return (
    <Layout>
      {/*<ChekBackEnd/>*/}
      <PromoSections/>
      <BrandsProductSection/>
    </Layout>
  );
};

export default HomePage;