import React, {memo, useEffect, useState} from 'react';
import './product.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT, GET_TOOL} from "../../../redux/types/types";
import {Skeleton} from "@mui/material";
import axios from "axios";

const Product = memo((props) => {
  const {
    product,
    carts,
  } = props

  const dispatch = useDispatch()
  const [cartDelete, setCartDelete] = useState(false)
  const [img, setImg] = useState(new Image());
  const [loadingImg, setLoadingImg] = useState(false)


  useEffect(() => {
    if (Array.isArray(carts)){
      const isProductInCart = carts?.some(cartItem => cartItem.id === product.id);
      setCartDelete(isProductInCart);
    }
  }, [carts, product]);


  useEffect(() => {
    setLoadingImg(true)
    if (product){
      axios.get(`${product.thumbnail}`, { responseType: 'blob' })
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
    <div key={product.id} className={'product'}>
      <div className={'img-product'}>
        <Link
          to={'/tool'}
          onClick={event => handleGetTool()}
        >
          {loadingImg?
            <Skeleton className={'img'} variant="rectangular" />
            :
            <img className={'img'} src={img.src} alt=""/>
          }
        </Link>
      </div>
      <Link
        to={'/tool'}
        onClick={event => handleGetTool()}
      >
        <div className={'product-title'}>
          {loadingImg?
            <>
              <Skeleton className={'product-articl'} variant="rectangular" />
              <Skeleton className={'product-name'} variant="rectangular" />
              <Skeleton className={'price'} variant="rectangular" />
            </>
            :
            <>
              <p className={'product-articl'}>1234567</p>
              <p className={'product-name'}>{product.title}</p>
              <p className={'price'}>{product.price} сом</p>
            </>
          }

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