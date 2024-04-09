import React from 'react';
import '../stick-menu.scss'

const StickCategory = () => {
  return (
    <div className={'dop-menu'}>
      <div className={'container'}>
        <div className="stick-menu">
          <div className="brand">Отделочный</div>
          <div className="brand">Слесарный</div>
          <div className="brand">Автомобильный</div>
          <div className="brand">Столярный</div>
          <div className="brand">Измерительный</div>
          <div className="brand">Крепежный</div>
          <div className="brand">Режущий</div>
          <div className="brand">Прочее</div>
        </div>
      </div>
    </div>

  );
};

export default StickCategory;