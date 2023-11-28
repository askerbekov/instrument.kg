import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className={'navigation'}>
          <a href="#">О нас</a>
          <a href="#">Бренды</a>
          <a href="#">Акции</a>
        </nav>
        <div className={''}>
          <a href="#">Ул. Пушкина, дом Колотушкина</a>
          <a href="#">Показать на карте</a>
        </div>
        <div>
          <a href="#">+996(999)99 99 99</a>
          <a href="#">пн-вс 07:00-20:00</a>
        </div>
      </div>
    </header>
  );
};

export default Header;