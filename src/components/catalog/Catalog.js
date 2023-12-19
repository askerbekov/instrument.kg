import React, {memo, useState} from 'react';
import categories from "../categories/categories";
import AsideCatalog from "../header/AsideCatalog";
import './catalog.scss'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SET_CATEGORY, SET_PODCATEGORY} from "../../redux/types/types";

const Catalog = memo(({isOpenCatalog, setOpenCatalog}) => {
  const dispatch = useDispatch()

  const [podcatalog, setPodcatalog] = useState(categories.category[0])



  const handleSetBreadCrumbs = () => {

  }

  const handleHoverCatalog = (el) => {
    setPodcatalog(el)
  }
  return (
    <div className={`catalog ${isOpenCatalog ? 'd-block' : 'd-none'}`}>
      <div className="container box">
        <div className={'left-box'}>
          <ul>
            {categories.category.map(el => {
              return(
                <AsideCatalog
                  key={el.id}
                  podcatalog={podcatalog}
                  handleHoverCatalog={handleHoverCatalog}
                  el={el}
                  setOpenCatalog={setOpenCatalog}
                />
              )
            })}
          </ul>
        </div>
        <div className={'right-box'}>
          <ul className={'podcat'}>
            {podcatalog &&
              podcatalog?.podcategoriy?.map((podcat, i) => {
                return (
                  <Link
                    key={i}
                    onClick={event => {
                      handleSetBreadCrumbs()
                      console.log(podcatalog, podcat)
                      dispatch({type:SET_CATEGORY, payload: podcatalog})
                      dispatch({type: SET_PODCATEGORY, payload: {id: i, podcategory: podcat}})
                      setOpenCatalog(false)
                    }}
                    to={`/categories/${podcatalog.id}/podcatalog/${i}`}
                  >
                    <li
                      className={'list-podcat'}
                      key={i}
                    >
                      {podcat}
                    </li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Catalog;