import React from 'react';
import './order-stick.scss'

const OrderStick = ({carts}) => {

  return (
    <div className={'order-stick'}>
      <div className="container">
        <div className="row">
          <div className="col-5">
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
            <div className="box">
              <h2 className={'txt-order'}>
                {
                  carts.reduce((acc, product) => acc + product.price ,0)
                }
                сом
              </h2>
            </div>
          </div>
          <div className="col-3 center">
            <div className="box">
              <button className={'add-cart-btn'}>
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStick;