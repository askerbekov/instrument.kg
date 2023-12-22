import React, {useState} from 'react';
import Layout from "../../components/layout/Layout";
import {useSelector} from "react-redux";
import ProductsToList from "../../components/poducts/product-to-list/ProductsToList";
import './carts-page.scss'
import OrderStick from "../../components/order-stick/OrderStick";
import Modal from "../../components/modal/ModalOrder";


const CartsPage = () => {
  const carts = useSelector(state => state.cartReducer.carts)
  // console.log(carts)


  return (
    <Layout>
      <section className={'section-carts'}>
        <div className="container">
          <h2 className={'section-title'}>Корзинка</h2>
        </div>
        <OrderStick carts={carts} />
        {/*<Modal handleClose={handleClose} open={open} handleOpen={handleOpen}/>*/}
        <div className="container">
          <div className={'carts-list'}>
            {
              carts.map(el => {
                return(
                  <ProductsToList key={el.id} product={el} carts={carts} itsCart={true}/>
                )
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartsPage;