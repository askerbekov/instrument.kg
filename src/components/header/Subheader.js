import React, {memo, useState} from 'react';
import './subheader.scss'
import Search from "../search/Search";
import {Link} from "react-router-dom";
import ModalCatalogNew from "../catalog/new-catalog/modal-catalog/ModalCatalogNew";

const Subheader = memo(() => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)

  const handleClickCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }
  const handleClose = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }


  return (
    <header className={`${isOpenCatalog ? '' : 'header-stick'}`}>
      <div className="subheader">
        {/*<Catalog isOpenCatalog={isOpenCatalog} setOpenCatalog={setIsOpenCatalog}/>*/}
        <div className={`overlay ${isOpenCatalog ? 'd-block' : 'd-none'}`}></div>
        <ModalCatalogNew open={isOpenCatalog} handleClose={handleClose}/>
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
                  handleClickCatalog()
                  // scrollToHeader()
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
