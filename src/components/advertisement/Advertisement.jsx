import React from 'react';
import './advertisement.scss'

const Advertisement = () => {
  return (
    <div className={'advertisement'}>
      <div className={'advertisement-top-box'}>
        <h2>Реклама рассрочки</h2>
      </div>
      <div className="advertisement-bottom-box">
        <h2>Реклама программы лояльности</h2>
      </div>
    </div>
  );
};

export default Advertisement;