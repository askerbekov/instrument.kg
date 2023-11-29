import React, {useState} from 'react';
import '../styles/subheader.scss'
import categories from "../categories/categories";
const Subheader = () => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  const handleClickCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }

  console.log(categories.category)

  return (
    <header className={'subheader'}>
      <div className="container subheader-wrap">
        <div className={`catalog ${isOpenCatalog ? 'd-block' : 'd-none'}`}>
          <div className={'left-box'}>
            <ul>
              {categories.category.map(el => {
                return (
                  <li className={'elemCategory'}>{el.category}</li>
                )
              })}
            </ul>

          </div>
          <div className={'right-box'}>

          </div>
        </div>
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
        <a href={'#'} className={'carts'}>
          Корзинка
          <i className={'icon carts-icon'}></i>
        </a>
      </div>
    </header>
  );
};

export default Subheader;