import React, {memo, useEffect, useState} from 'react';
import './product.scss'
import {Skeleton} from "@mui/material";

const Product = memo((props) => {
  const {
    skeletonProduct
  } = props
  return (
    <div className={'product'} key={skeletonProduct}>
      <div className={'img-product'}>
        <Skeleton className={'img'} variant="rectangular"/>
      </div>
      <div className={'product-title'}>
        <Skeleton className={'product-articl'} variant="rectangular"/>
        <Skeleton className={'product-name'} variant="rectangular"/>
        <Skeleton className={'price'} variant="rectangular"/>
      </div>
      <Skeleton className={'add-cart-btn'} variant="rectangular"/>
      {/*<button*/}
      {/*  className={cartDelete ? 'delete-product' : 'add-cart-btn'}*/}
      {/*  onClick={event => {*/}
      {/*    cartDelete ? deleteProductCarts(product) : addCarts(product)*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {*/}
      {/*    cartDelete? 'Удалить с корзины' : 'добавить в корзину'*/}
      {/*  }*/}
      {/*</button>*/}
    </div>
  );
});

export default Product;