import React, {memo, useState} from 'react';
import './subheader.scss'
import Search from "../search/Search";
import Catalog from "../catalog/Catalog";
import {Link} from "react-router-dom";
import {scrollToHeader} from "../scrollFunction";

const Subheader = memo(() => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)

  const handleClickCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }


  return (
    <header className={`${isOpenCatalog ? '' : 'header-stick'}`}>
      <div className="subheader">
        <Catalog isOpenCatalog={isOpenCatalog} setOpenCatalog={setIsOpenCatalog}/>
        <div className="container subheader-wrap">
          <Link
            to={'/'}
          >
            <i className={'icon logo'}></i>
          </Link>
          <div className={'subheader-catalog'}>
            <div className="catalog-wrap">
              <button
                className={'catalog-btn'}
                onClick={event => {
                  scrollToHeader()
                  handleClickCatalog()
                }}
              >
                {isOpenCatalog ?
                  <i className={'icon close-icon'}></i>
                  :
                  <div className={'burger'}>
                    <i className={'icon burger-icon'}></i>
                    <i className={'icon burger-icon'}></i>
                    <i className={'icon burger-icon'}></i>
                  </div>
                }
                Каталог
              </button>
            </div>
            <Search/>
          </div>
          <div className={'header-area-controls'}>
            <Link to={'/'} className={'account button-header'}>
              <p className={'text-button'}>Кабинет</p>
              <i className={'icon account-icon'}></i>
            </Link>
            <Link to={'/'} className={'account button-header'}>
              <p className={'text-button'}>Избранное</p>
              <i className={'icon wishlist-icon'}></i>
            </Link>
            <Link to={'/carts'} className={'carts-full button-header'}>
              <p className={'text-button'}>Корзина</p>
              <i className={'icon cart-icon'}></i>
            </Link>

          </div>
        </div>
      </div>
      {/*<StickCategory/>*/}
      {/*<StickBrands/>*/}
    </header>
  );
});

export default Subheader;
