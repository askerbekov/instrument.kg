import React, {memo} from 'react';
import './product.scss'
import {Link} from "react-router-dom";

const Product = memo(() => {

  return (
    <div className={'product'}>
      <div className={'img-product'}>
        <Link
          to={'/tool'}
        >
          <img className={'img'} src={'https://picsum.photos/240/240'} alt=""/>
        </Link>
      </div>
      <Link
        to={'/tool'}
      >
        <div className={'product-title'}>
          <p className={'product-articl'}>1234567</p>
          <p className={'product-name'}>Пильный диск по дереву, 125 х 22 мм, 36 зубьев Sparta</p>
          <p className={'price'}>1900 сом</p>
        </div>
      </Link>
      <button className={'add-cart-btn'}>
        добавить в корзину
      </button>
    </div>
  );
});

export default Product;