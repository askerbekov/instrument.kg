import React from 'react';
import {useSelector} from "react-redux";
import categoriesReducer from "../../redux/reducer/categoriesReducer";

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