import React from 'react';
import Layout from "../components/layout/Layout";
import ChekBackEnd from "../components/ChekBackEnd";

const HomePage = () => {
  return (
    <Layout>
      <ChekBackEnd/>
      <div className={'content red-bg'}></div>
      <div className={'content bg-a'}></div>
      <div className={'content bg-b'}></div>
    </Layout>
  );
};

export default HomePage;