import React, {memo, useEffect, useState} from 'react';
import './subheader.scss'
import Search from "../search/Search";
import Catalog from "../catalog/Catalog";
import {Link} from "react-router-dom";
const Subheader = memo(() => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)


  const handleClickCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }

  const scrollToHeader = () => {
    const header = document.getElementById('header')
    if(header){
      console.log('scroll')
      header.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <header className={`${isOpenCatalog ? '' : 'header-stick'}`}>
      <div className="subheader">
        <Catalog isOpenCatalog={isOpenCatalog} setOpenCatalog={setIsOpenCatalog}/>
        <div className="container subheader-wrap">
          <Link to={'/'}>
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
          <a href={'#'} className={'carts'}>
            Корзинка
            <i className={'icon carts-icon'}></i>
          </a>
        </div>
      </div>
    </header>
  );
});

export default Subheader;