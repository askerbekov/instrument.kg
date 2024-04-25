import React from 'react';
import categories from "../../categories/categories";
import PodcategoryList from "../new-catalog/modal-catalog/PodcategoryList";
import './category-section.scss'
import {Link} from "react-router-dom";

const CategorySection = () => {
  return (
    <div className={'category-section'}>
      <div className="container">
        <div className="row">
          {categories.map(el => {
            return(
              <div className="col-3">
                <div className="category-box">
                  <Link to={'/'}>
                    <div className="img-box">
                      <img src={el.img} alt={el.name}/>
                    </div>
                  </Link>
                  <Link to={'/'}>
                    <h2 className={'category-name'}>{el.category}</h2>
                  </Link>
                  <span className={'red-line'}></span>
                  <PodcategoryList el={el}/>
                </div>
              </div>
            )
          })
          }

        </div>
      </div>
    </div>
  );
};

export default CategorySection;