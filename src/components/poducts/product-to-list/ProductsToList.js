import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT, GET_TOOL} from "../../../redux/types/types";
import {Link} from "react-router-dom";
import './product-to-list.scss'
import Increment from "../../btn/increment";
import axios from "axios";
import {Skeleton} from "@mui/material";

const ProductsToList = memo((props) => {
  const {
    product,
    itsCart,
  } = props

  const dispatch = useDispatch()
  const [cartDelete, setCartDelete] = useState(false)
  const carts = useSelector(state => state.cartReducer.carts)
  const [img, setImg] = useState();
  const [loadingImg, setLoadingImg] = useState(true)


  useEffect(() => {
    if (Array.isArray(carts)) {
      const isProductInCart = carts?.some(cartItem => cartItem.id === product.id);
      setCartDelete(isProductInCart);
    }
  }, [carts, product]);

  useEffect(() => {
    // setLoadingImg(true)
    if (product){
      axios.get(product?.thumbnail, { responseType: 'blob' })
        .then(response => {
          const url = URL.createObjectURL(response.data);
          const newImg = new Image();
          newImg.src = url;
          setImg(newImg);
        })
        .catch(error => {
          console.error('Ошибка при загрузке изображения:', error);
        })
        .finally(() => setLoadingImg(false))
    }
  }, [product]);

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
          <div key={product.id} className={'product-to-list'}>
            <div className="row">
              <div className="col-1">
                <div className={'img-product'}>
                  <Link
                    to={'/tool'}
                    onClick={event => handleGetTool()}
                  >
                    {loadingImg?
                      <Skeleton className={'img'} variant="rectangular"/>
                      :
                      <img className={'img'} src={img?.src} alt=""/>
                    }
                  </Link>
                </div>
              </div>
              <div className="col-1 center">
                <div className="box">
                  <Link
                    to={'/tool'}
                    onClick={event => handleGetTool()}
                  >
                    <p className={'product-articl'}>1234567</p>
                  </Link>
                </div>
              </div>
              <div className="col-5 center">
                <div className="box">
                  <Link
                    to={'/tool'}
                    onClick={event => handleGetTool()}
                  >
                    <p className={'product-name'}>{product.title}</p>
                  </Link>
                </div>
              </div>
              <div className="col-1 center">
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
          <div key={product.id} className={'product-to-list'}>
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
});

export default ProductsToList;

