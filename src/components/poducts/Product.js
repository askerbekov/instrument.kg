import React from 'react';
import './product.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Product = () => {

  return (
    <div className={'product'}>
      <div className={'img-product'}>
        <Link to={''}>
          <img className={'img'} src={'https://picsum.photos/1440/900'} alt=""/>
        </Link>
      </div>
      <Link to={''}>
        <div className={'product-title'}>
          <p className={'product-articl'}>1234567</p>
          <p className={'product-name'}>Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;