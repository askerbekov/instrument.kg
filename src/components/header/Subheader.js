import React, {useState} from 'react';
import '../styles/subheader.scss'
const Subheader = () => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  const handleClickCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }

  return (
    <header className={'subheader'}>
      <div className="container subheader-wrap">
        <i className={'icon logo'}></i>
        <div className={'subheader-catalog'}>
          <div className="catalog-wrap">
            <button
              className={'catalog-btn'}
              onClick={event => handleClickCatalog()}
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
          <div className={'search'}>
            <form action="" className={'search-form'}>
              <input type="text" className={'search-input'} placeholder={'Искать товары ...'}/>
              <i className={'icon search-icon'}></i>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Subheader;