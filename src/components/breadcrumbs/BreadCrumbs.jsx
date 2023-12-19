import React from 'react';
import {useSelector} from "react-redux";

const BreadCrumbs = () => {


  const breadCrumbs = useSelector(state => state.categoriesReducer)
  console.log(breadCrumbs)
  return (
    <section className={'bread-crumbs'}>
      <div className="container">

      </div>
    </section>
  );
};

export default BreadCrumbs;