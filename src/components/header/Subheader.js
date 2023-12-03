import React, {useState} from 'react';
import '../styles/subheader.scss'
import categories from "../categories/categories";
import AsideCatalog from "./AsideCatalog";
import Search from "../search/Search";
const Subheader = () => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false)
  const [podcatalog, setPodcatalog] = useState([])
  const handleClickCatalog = () => {
    setIsOpenCatalog(!isOpenCatalog)
  }

  const handleHoverCatalog = (el) => {
    console.log(podcatalog)
    setPodcatalog(el)
  }

  // console.log(categories.category)

  return (
    <header className={'subheader'}>
      <div className="container subheader-wrap">
        <div className={`catalog ${isOpenCatalog ? 'd-block' : 'd-none'}`}>
          <div className={'left-box'}>
            <ul>
              {categories.category.map(el => {
                return(
                  <AsideCatalog key={el.id} podcatalog={podcatalog} handleHoverCatalog={handleHoverCatalog} el={el}/>
                  )
              })}
            </ul>
          </div>
          <div className={'right-box'}>
            <ul className={'podcat'}>
              {podcatalog &&
                podcatalog?.podcategoriy?.map((podcat, i) => {
                  return (
                    <a href={'#'}>
                      <li
                        className={'list-podcat'}
                        key={i}
                      >
                        {podcat}
                      </li>
                    </a>
                    )
                })
              }
            </ul>
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
          <Search/>
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