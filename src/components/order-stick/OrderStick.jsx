import React, {useEffect, useState} from 'react';
import './order-stick.scss'
import ModalOrder from "../modal/ModalOrder";
import {useDispatch, useSelector} from "react-redux";
import {PRICE} from "../../redux/types/types";
import {Link} from "react-router-dom";



const OrderStick = ({carts}) => {
  const dispatch = useDispatch()
  const orderPrice= useSelector(state => state.cartReducer.price)
  const order = useSelector(state => state.cartReducer.order)
  const [open, setOpen] = useState(false)

  const txt = `Здравствуйте, хотел бы заказать следующие товары: ${order.map(el => 'Артикул: ' + el.productId + ' Количество: ' + el.quantity + '\n').join('')}`

  const encoded = encodeURI(txt)
  console.log(encoded)

  useEffect(()=>{
    dispatch({type:PRICE})
  },[carts])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <div className={'order-stick'}>
      <div className="container">
        <ModalOrder handleClose={handleClose} open={open}/>
        <div className="row">
          <div className="col-4">
            <div className="box">
              <p className={'txt-order'}>Количество товаров в корзине: {carts.length}</p>
            </div>
          </div>
          <div className="col-2">
            <div className="box">
              <h2 className={'txt-order'}>
                Итого:
              </h2>
            </div>
          </div>
          <div className="col-2 center">
            <div className="box-price">
              <h2 className={'txt-order'}>
                {/*{*/}
                {/*  carts.reduce((acc, product) => acc + product.price ,0)*/}
                {/*}*/}
                {orderPrice}
                сом
              </h2>
            </div>
          </div>
          <div className="col-2 center">
            <div className="box">
              <button
                className={carts.length === 0 ? 'disabled-btn' : 'add-cart-btn'}
                onClick={handleOpen}
                disabled={carts.length === 0}
              >
                Оформить заказ
              </button>
            </div>
          </div>
          <div className="col-2 center">
            <div className="box">
              <a
                href={`https://wa.me/+79639991992?text=${encoded}`}
                className={'whatsapp-btn add-cart-btn'}
                // onClick={handleOpen}
                disabled={carts.length === 0}
              >
                Заказать по Ватсап
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStick;