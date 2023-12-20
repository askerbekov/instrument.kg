import React, {memo, useEffect, useState} from 'react';
import './product.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT} from "../../../redux/types/types";

const Product = memo((props) => {
  const {
    product,
    carts,
  } = props

  const dispatch = useDispatch()
  const [cartDelete, setCartDelete] = useState(false)
  useEffect(() => {
    if (Array.isArray(carts)){
      const isProductInCart = carts?.some(cartItem => cartItem.id === product.id);
      setCartDelete(isProductInCart);
    }
  }, [carts, product]);

  const deleteProductCarts = () => {
    dispatch({type: DELETE_PRODUCT, payload: product})
  }

  const addCarts = () => {
    dispatch({type: ADD_CARTS_PRODUCT, payload: product})
  }

  return (
    <div className={'product'}>
      <div className={'img-product'}>
        <Link
          to={'/tool'}
        >
          <img className={'img'} src={product.thumbnail} alt=""/>
        </Link>
      </div>
      <Link
        to={'/tool'}
      >
        <div className={'product-title'}>
          <p className={'product-articl'}>1234567</p>
          <p className={'product-name'}>{product.title}</p>
          <p className={'price'}>{product.price} сом</p>
        </div>
      </Link>
      <button
        className={cartDelete ? 'delete-product' : 'add-cart-btn'}
        onClick={event => {
          cartDelete ? deleteProductCarts(product) : addCarts(product)
        }}
      >
        {
          cartDelete? 'Удалить с корзины' : 'добавить в корзину'
        }
      </button>
    </div>
  );
});

export default Product;