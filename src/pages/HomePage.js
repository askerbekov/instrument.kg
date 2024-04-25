import React, {useEffect} from 'react';
import PromoSections from "../components/promo-sections/PromoSections";
import BrandsProductSection from "../components/sections Brands Products/BrandsProductSection";
import {useDispatch} from "react-redux";
import {getProducts} from "../redux/action/getProductsAction";
import Footer from "../components/footer/Footer";
import PopUp from "../components/pop-up/PopUp";
import Head from "../components/header/head/Head";
import DiscountSection from "../components/discountSection/DiscountSection";
import CategorySection from "../components/catalog/category-section/CategorySection";

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
      <Head/>
      <PopUp/>
      {/*<StickBrands/>*/}
      {/*<StickCategory/>*/}
      {/*<AsideCategory/>*/}
      {/*<AsideBrands/>*/}
      <main>
        <PromoSections/>
        <DiscountSection/>
        <BrandsProductSection/>
        <CategorySection/>
      </main>
      <Footer/>
      {/*</Layout>*/}
    </>

  );
};

export default HomePage;