import React, {memo, useEffect, useState} from 'react';
import './product-titool.scss'
import {Link} from "react-router-dom";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT, GET_TOOL, POPUP} from "../../../../redux/types/types";
import {useDispatch, useSelector} from "react-redux";

const ProductNew = memo(({product}) => {
  const dispatch = useDispatch();
  const [inTheCart, setInTheCart] = useState(false)
  const carts = useSelector(state => state.cartReducer.carts)
  const [cartDelete, setCartDelete] = useState(false)


  useEffect(() => {
    if (Array.isArray(carts)) {
      const isProductInCart = carts?.some(cartItem => cartItem.id === product.id);
      setInTheCart(isProductInCart);
    }
  }, [carts, product]);

  const deleteProductCarts = () => {
    dispatch({type: DELETE_PRODUCT, payload: product})
  }

  // const addCarts = () => {
  //   dispatch({type: ADD_CARTS_PRODUCT, payload: product})
  // }

  const addCarts = () => {
    if (inTheCart){
      // dispatch({type:QUANTITY_PRODUCT, payload:product})
    }
    else {
      dispatch({type: ADD_CARTS_PRODUCT, payload: product})
    }
    dispatch({type:POPUP, payload:product})
  }
  const handleGetTool = () => {
    dispatch({type: GET_TOOL, payload: product})
  }

  return (
    <div className={'new-product'}>
      <div className={'image'}>
        {product.old_price &&
          <span className={'action'}>
            -{100 - Math.round(product.price * 100 / product.old_price)}%
        </span>
        }
        <div className={'img-tool'}>
          <Link
            to={"/tool"}
            onClick={event => handleGetTool(event)}
          >
            <img
              className={'img'}
              src={product.thumbnail}
              alt={product.name}
              loading="lazy"
              // ref={imgRef}
            />
          </Link>
        </div>
      </div>
      <div className={'tool-info'}>
        <div className={'tool-name'}>
          <Link
            to={"/tool"}
            onClick={event => handleGetTool(event)}
          >
            {product.title}
          </Link>
        </div>
        <div className={'tool-price'}>
          <span className={'price-old'}>{product.old_price ? product.old_price + ' сом' : false}</span>
          <span className={'priceProduct'}>
            {(product.price+'').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')} сом
          </span>
        </div>
      </div>
      <div className={'product-controls'}>
        <button
          className={cartDelete ? 'delete-product' : 'add-cart_btn'}
          onClick={event => {
            cartDelete ? deleteProductCarts(event) : addCarts(event)
          }}
        >
          {
            cartDelete ? 'Удалить с корзины' : 'B корзину'
          }
        </button>
        <button className={'action-btn'}>
          <i className={'icon wishlist-icon'}></i>
        </button>
      </div>
    </div>
  );
});

export default ProductNew;