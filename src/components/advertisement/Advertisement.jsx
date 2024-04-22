import React from 'react';
import './advertisement.scss'

const Advertisement = () => {
  return (
    <div className={'advertisement'}>
      <div className={'advertisement-top'}>
        <h1>Реклама рассрочки</h1>
      </div>
      <div className="advertisement-bottom">
        <h1>Реклама программы лояльности</h1>
      </div>
    </div>
  );
};

export default Advertisement;