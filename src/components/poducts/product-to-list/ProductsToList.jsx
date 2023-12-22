import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT, GET_TOOL} from "../../../redux/types/types";
import {Link} from "react-router-dom";
import './product-to-list.scss'
import Increment from "../../btn/increment";

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

  const handleGetTool = () => {
    dispatch({type:GET_TOOL, payload:product})
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
                    onClick={event => handleGetTool()}
                  >
                    <img className={'img'} src={product.thumbnail} alt=""/>
                  </Link>
                </div>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <Link
                    to={'/tool'}
                    onClick={event => handleGetTool()}
                  >
                    <p className={'product-articl'}>1234567</p>
                  </Link>
                </div>
              </div>
              <div className="col-2 center">
                <div className="box">
                  <Link
                    to={'/tool'}
                    onClick={event => handleGetTool()}
                  >
                    <p className={'product-name'}>{product.title}</p>
                  </Link>
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
                  <Link
                    to={'/tool'}
                    onClick={event => handleGetTool()}
                  >
                    <p className={'product-articl'}>1234567</p>
                  </Link>
                </div>
              </div>
              <div className="col-3 center">
                <div className="box">
                  <Link
                    to={'/tool'}
                    onClick={event => handleGetTool()}
                  >
                    <p className={'product-name'}>{product.title}</p>
                  </Link>
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