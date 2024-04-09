import React, {memo, useEffect, useState} from 'react';
import './subheader.scss'
import Search from "../search/Search";
import Catalog from "../catalog/Catalog";
import {Link} from "react-router-dom";
import {scrollToHeader} from "../scrollFunction";
import {useDispatch, useSelector} from "react-redux";
import StickCategory from "../stick menu/stick-category/Stick-category";
import StickBrands from "../stick menu/stick-brands/Stick-Brands";


const Subheader = memo(() => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  const dispatch = useDispatch()

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
          <Link to={'/carts'} className={'carts'}>
            Корзинка
            <i className={'icon carts-icon'}></i>
          </Link>
        </div>
      </div>
      <StickCategory/>
      <StickBrands/>
    </header>
  );
});

export default Subheader;
