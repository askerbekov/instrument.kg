import React, {useEffect, useRef, useState} from 'react';
import './modal-catalog.scss'
import categories from "../../../categories/categories";
import PodcategoryList from "./PodcategoryList";
import {Link} from "react-router-dom";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  // height: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 1,
  borderRadius:'10px',
  p: 4,
};
const ModalCatalogNew = ({open, handleClose}) => {
  const modalEl = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalEl.current && !modalEl.current.contains(event.target) && event.target.className !== 'catalog-btn') {
        handleClose();
      }
    };

    if (open){
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose]);

  return (
    <div
      ref={modalEl}
      className={`custom-modal ${open ? 'd-block' : 'd-none'}`}
    >
      <div className="container">
        <div className="custom-modal-box">
          <div className="row">
            { categories.map(el => {
              return(
                <div className="col-3" key={el.id}>
                  <div className="category-box">
                    <div className="header-catalog-box">
                      <Link to={`/categories/${el.id}`}>
                        <img className={'category-img'} src={el.img} alt={el.category}/>
                        <h4 className={'category-name'}>{el.category}</h4>
                      </Link>
                    </div>
                    <div className="podcategory-box">
                      <PodcategoryList el={el}/>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCatalogNew;