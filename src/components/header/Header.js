import React from 'react';
import '../styles/header.scss'
import Subheader from "./Subheader";
import BrandsPage from "../../pages/BrandsPage";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={'header'} id={'header'}>
        <div className="container header__wrap">
          <nav className={'header__navigation'}>

            <a href="#">О нас</a>
            <Link to={'/brands'}> Бренды</Link>
            <a href="#">Акции</a>
          </nav>
          <div className={'header__address'}>
            <a
              href="https://2gis.kg/bishkek/search/%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/firm/70000001030747788?m=74.621813%2C42.859441%2F17.24"
              className={'link'}
              target={'_blank'}
            >
              г. Бишкек ул.Матросова 4. (пересекает ул.Кулатова)
              <span>Показать на карте</span>
            </a>
          </div>
          <div className={'header__phone'}>
            <a href="tel:+996999999999">+996(999)99 99 99</a>
            <span>пн-вс 07:00-20:00</span>
          </div>
        </div>
      </header>
      <Subheader/>
    </>

  );
};

export default Header;