import React from 'react';
import Layout from "../components/layout/Layout";
import ChekBackEnd from "../components/ChekBackEnd";
import PromoSections from "../components/promoSections/PromoSections";

const HomePage = () => {
  return (
    <Layout>
      {/*<ChekBackEnd/>*/}
      <PromoSections/>
      {/*<div className={'content red-bg'}></div>*/}
      {/*<div className={'content bg-a'}></div>*/}
      <div className={'content bg-b'}></div>
    </Layout>
  );
};

export default HomePage;