import React, {useState} from 'react';
import './order-stick.scss'
import ModalOrder from "../modal/ModalOrder";



const OrderStick = ({carts}) => {

  const [open, setOpen] = useState(false)

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
              <button
                className={carts.length === 0 ? 'disabled-btn' : 'add-cart-btn'}
                onClick={handleOpen}
                disabled={carts.length === 0}
              >
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