import React, {memo, useEffect, useRef, useState} from 'react';
import './product.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT, GET_TOOL} from "../../../redux/types/types";
import {Skeleton} from "@mui/material";
import axios from "axios";

const Product = memo((props) => {
  const {
    product,
  } = props

  const dispatch = useDispatch()
  const [cartDelete, setCartDelete] = useState(false)
  const [img, setImg] = useState(new Image());
  const [loadingImg, setLoadingImg] = useState(true)
  const imgRef = useRef(null);
  const carts = useSelector(state => state.cartReducer.carts)


  useEffect(() => {
    if (Array.isArray(carts)) {
      const isProductInCart = carts?.some(cartItem => cartItem.id === product.id);
      setCartDelete(isProductInCart);
    }
  }, [carts, product]);

  useEffect(() => {
    const currentImgRef = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting ) {
            loadImg()
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [product]);


  const loadImg = async () => {
    setLoadingImg(true)
    try {
      const response = await axios.get(`${product.thumbnail}`, { responseType: 'blob' });
      const urlImg = URL.createObjectURL(response.data);
      setImg(urlImg);
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    } finally {
      setLoadingImg(false);
    }
  };

  const deleteProductCarts = () => {
    dispatch({type: DELETE_PRODUCT, payload: product})
  }

  const addCarts = () => {
    dispatch({type: ADD_CARTS_PRODUCT, payload: product})
  }
  const handleGetTool = () => {
    dispatch({type: GET_TOOL, payload: product})
  }

  return (
    <div key={product.id} className={'product'}>
      <div className={'img-product'}>
        <Link
          to={'/tool'}
          onClick={event => handleGetTool(event)}
        >
          {product.id > 4 ?
            <>
              {loadingImg ?
                <>
                  <Skeleton className={'img'} variant="rectangular"/>
                  <img loading={"lazy"} ref={imgRef} alt={product.name}/>
                </>
                :
                <img
                  className={'img'}
                  src={img}
                  alt={product.name}
                  loading="lazy"
                  ref={imgRef}
                />
              }
            </>
            :
            <img
              className={'img'}
              src={product.thumbnail}
              alt={product.name}
              loading="lazy"
              ref={imgRef}
            />

          }

        </Link>
      </div>
      <Link
        to={'/tool'}
        onClick={event => handleGetTool(event)}
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
          cartDelete ? deleteProductCarts(event) : addCarts(event)
        }}
      >
        {
          cartDelete ? 'Удалить с корзины' : 'добавить в корзину'
        }
      </button>
    </div>
  );
});

export default Product;