import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT} from "../../../redux/types/types";
import {Link} from "react-router-dom";
import './product-to-list.scss'
import Increment from "../../btn/increment";
import cartReducer from "../../../redux/reducer/cartsReducer";

const ProductsToList = (props) => {
  const {
    product,
    // carts,
    itsCart,
  } = props

  const dispatch = useDispatch()
  const [cartDelete, setCartDelete] = useState(false)
  const carts = useSelector(state => state.cartReducer.carts)
  useEffect(() => {
    if (Array.isArray(carts)) {
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
    <>
      {
        itsCart ?
          <div className={'product-to-list'}>
            <div className="row">
              <div className="col-2">
                <div className={'img-product'}>
                  <Link
                    to={'/tool'}
                  >
                    <img className={'img'} src={product.thumbnail} alt=""/>
                  </Link>
                </div>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <p className={'product-articl'}>1234567</p>
                </div>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <p className={'product-name'}>{product.title}</p>
                </div>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <p className={'price'}>{product.price} сом</p>
                </div>
              </div>
              <div className="col-2 center">
                <Increment product={product}/>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <button
                    className={cartDelete ? 'delete-product' : 'add-cart-btn'}
                    onClick={event => {
                      cartDelete ? deleteProductCarts(product) : addCarts(product)
                    }}
                  >
                    {
                      cartDelete ? 'Удалить с корзины' : 'добавить в корзину'
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
          :
          <div className={'product-to-list'}>
            <div className="row">
              <div className="col-2">
                <div className={'img-product'}>
                  <Link
                    to={'/tool'}
                  >
                    <img className={'img'} src={product.thumbnail} alt=""/>
                  </Link>
                </div>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <p className={'product-articl'}>1234567</p>
                </div>
              </div>
              <div className="col-3 center">
                <div className="box">
                  <p className={'product-name'}>{product.title}</p>
                </div>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <p className={'price'}>{product.price} сом</p>
                </div>
              </div>
              <div className="col-3 center">
                <div className="box">
                  <button
                    className={cartDelete ? 'delete-product' : 'add-cart-btn'}
                    onClick={event => {
                      cartDelete ? deleteProductCarts(product) : addCarts(product)
                    }}
                  >
                    {
                      cartDelete ? 'Удалить с корзины' : 'добавить в корзину'
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
};

export default ProductsToList;