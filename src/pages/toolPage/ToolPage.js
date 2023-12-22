import React, {useEffect, useState} from 'react';
import Layout from "../../components/layout/Layout";
import './toolPage.scss'
import '../../components/styles/column-row.scss'
import toolImg from '../../components/assets/tool.jpg'
import logoBrands from '../../components/assets/logoBrands.png'
import SwiperBrands from "../../components/swiper/SwiperBrands";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CARTS_PRODUCT, DELETE_PRODUCT} from "../../redux/types/types";

const ToolPage = () => {
  const carts = useSelector(state => state.cartReducer.carts)
  const tool = useSelector(state => state.toolReducer.tool)
  const dispatch = useDispatch()
  const [cartDelete, setCartDelete] = useState(false)
  useEffect(() => {
    if (Array.isArray(carts)){
      const isProductInCart = carts?.some(cartItem => cartItem.id === tool.id);
      setCartDelete(isProductInCart);
    }
  }, [carts, tool]);

  const deleteProductCarts = () => {
    dispatch({type: DELETE_PRODUCT, payload: tool})
  }

  const addCarts = () => {
    dispatch({type: ADD_CARTS_PRODUCT, payload: tool})
  }

  return (
    <Layout>
      <section className={'tool-section'}>
        <div className="container">
          <div className={'box-title'}>
            <h1 className={'title-tool'}>{tool.title}</h1>
            <p className={'article-tool'}>Артикул: <span>1234567</span></p>
          </div>
          <div className={'tool'}>
            <div className="row">
              <div className="col-5">
                <div className="tool-box">
                  <div className={'tool-slider'}>
                    tool slider
                  </div>
                  <div className={'tool-img'}>
                    <img className={''} src={tool.images[0]} alt="фотография инструмента"/>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="tool-description">
                  <div className={'img-brands'}>
                    <img src={logoBrands} alt="логотип бренда"/>
                  </div>
                  <div className={'description'}>
                    <h2 className={'title-tool'}>
                      Описание товара
                    </h2>
                    <p>{tool.description}</p>
                    {/*<p>*/}
                    {/*  Набор инструментов Stels 14106 в пластиковом кейсе включает в себя 94 предметов с присоединительным размером 1/2 и 1/4 дюйма из стали CrV. Он применяется для монтажа и демонтажа резьбовых соединений во время обслуживания и ремонта авто, а также выполнения бытовых работ. Инструменты пригодятся автолюбителям и домашним мастерам.*/}
                    {/*</p>*/}
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="box-btn">
                  <p className={'price'}>Цена: {tool.price} сом</p>
                  <button
                    className={cartDelete ? 'delete-product' : 'add-cart-btn'}
                    onClick={event => {
                      cartDelete ? deleteProductCarts(tool) : addCarts(tool)
                    }}
                  >
                    {
                      cartDelete? 'Удалить с корзины' : 'добавить в корзину'
                    }
                  </button>
                  {/*<button className={'add-cart-btn'}>*/}
                  {/*  Купить*/}
                  {/*</button>*/}
                </div>
              </div>
            </div>
          </div>
          <SwiperBrands name={'Похожие товары'}/>
        </div>
      </section>
    </Layout>
  );
};

export default ToolPage;