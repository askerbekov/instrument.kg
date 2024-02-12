import React, {useEffect} from 'react';
import Layout from "../components/layout/Layout";
import PromoSections from "../components/promoSections/PromoSections";
import BrandsProductSection from "../components/sections Brands Products/BrandsProductSection";
import {useDispatch} from "react-redux";
import ChekBackEnd from "../components/ChekBackEnd";
import {getProducts} from "../redux/action/getProductsAction";
import AsideCatalog from "../components/header/AsideCatalog";
import AsideBrands from "../components/aside/AsideBrands/AsideBrands";
import Header from "../components/header/Header";
import Subheader from "../components/header/Subheader";
import Footer from "../components/footer/Footer";
import AsideCategory from "../components/aside/AsideCategory/AsideCategory";

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    // dispatch({type:"CLEAR"})
  },[])
  return (
    <>
      {/*<Layout>*/}
      {/*<ChekBackEnd/>*/}
      <Header/>
      <AsideCategory/>
      <AsideBrands/>
      <main>
        <PromoSections/>
        <BrandsProductSection/>
      </main>
      <Footer/>
      {/*</Layout>*/}
    </>

  );
};

export default HomePage;