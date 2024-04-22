import React from 'react';
import {Link} from "react-router-dom";
import './head.scss'
import Subheader from "../Subheader";

const Head = () => {
  return (
    <header>
      <div className={'header-top'}>
        <div className="container">
          <div className="header-top-box">
            <ul className={'header-top-ul'}>
              <li className={'header-top-ul_li'}>
                <Link to={'/'} className={'show-cities'}>
                  <i className={'icon flagpole-icon'}></i>
                  <span>Бишкек</span>
                </Link>
              </li>
              <li className={'header-top-ul_li'}>
                <Link to={'/'}>
                  Распродажа
                </Link>
              </li>
              <li className={'header-top-ul_li'}>
                <Link to={'/'}>
                  Доставка
                </Link>
              </li>
              <li className={'header-top-ul_li'}>
                <Link to={'/'}>
                  Оплата
                </Link>
              </li>
              <li className={'header-top-ul_li'}>
                <Link to={'/'}>
                  Диллеры
                </Link>
              </li>
              <li className={'header-top-ul_li'}>
                <Link to={'/'}>
                  Сотрудничество
                </Link>
              </li>
              <li className={'header-top-ul_li'}>
                <Link to={'/'}>
                  Производители
                </Link>
              </li>
            </ul>
            <div className={'contact-phone'}>
              <a href="tel:+996999999999">
                <i className={'icon phone-icon'}></i>
                <span>+996 (999) 99 99 99</span>
              </a>
              <i className={'line'}></i>
              <a href="tel:+996999999999">
                <i className={'icon phone-icon'}></i>
                <span>+996 (999) 99 99 99</span>
              </a>
            </div>
          </div>
        </div>
        <Subheader/>
      </div>
    </header>
  );
};

export default Head;