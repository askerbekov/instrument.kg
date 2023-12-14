import React from 'react';
import Layout from "../components/layout/Layout";
import ChekBackEnd from "../components/ChekBackEnd";
import PromoSections from "../components/promoSections/PromoSections";
import SwiperBrands from "../components/swiper/SwiperBrands";
import BrandsProductSection from "../components/sections Brands Products/BrandsProductSection";

const HomePage = () => {
  return (
    <Layout>
      {/*<ChekBackEnd/>*/}
      <PromoSections/>
      <BrandsProductSection/>
    </Layout>
  );
};

export default HomePage;