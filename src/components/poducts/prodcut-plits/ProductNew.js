import React, {memo, useEffect, useState} from 'react';
import './productNew.scss'
import {Link} from "react-router-dom";
import {ADD_CARTS_PRODUCT, GET_TOOL, POPUP, QUANTITY_PRODUCT} from "../../../redux/types/types";
import {useDispatch, useSelector} from "react-redux";

const ProductNew = memo(({product}) => {
  const dispatch = useDispatch()
  const [inTheCart, setInTheCart] = useState(false)
  const carts = useSelector(state => state.cartReducer.carts)


  useEffect(() => {
    if (Array.isArray(carts)) {
      const isProductInCart = carts?.some(cartItem => cartItem.id === product.id);
      setInTheCart(isProductInCart);
    }
  }, [carts, product]);


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
      <span className={'article-tool'}>Код: 12345</span>
      <div className={'image'}>
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
        <div className={'addit-action'}>
          <div className={'quick-view'}>

          </div>
          <div className={'quick-order'}>

          </div>
          <div className={'wish-list'}>

          </div>
        </div>
      </div>
      <div className={'tool-info'}>
        <div className={'availability'}>
          ✓ В наличии
        </div>
        <div className={'tool-name'}>
          {/* Надо сделать линк по артиклу товара*/}
          <Link
            to={"/tool"}
            onClick={event => handleGetTool(event)}
          >
            {product.title}
          </Link>
        </div>
        <div className={'tool-price'}>
          <span className={'priceProduct'}>{product.price} сом</span>
          <button
            className={inTheCart ? 'carts greenCarts' : 'carts'}
            onClick={event => addCarts(event)}

            // className={cartDelete ? 'delete-product' : 'add-cart-btn'}
            // onClick={event => {
            //   cartDelete ? deleteProductCarts(event) : addCarts(event)
            // }}
          >
            <i className={'icon cart-icon'}></i>
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductNew;