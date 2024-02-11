import React from 'react';
import {Link} from "react-router-dom";
import categories from "../../categories/categories";
import './asideCategory.scss'

const AsideCategory = () => {
  console.log(categories.category)
  return (
    <aside className={'aside-category'}>
      <div className={'aside-category-wrap'}>
        <h2>Категории</h2>
        <ul className={'brands-list'}>
          {categories.category.map(el => {
            return(
              <Link
                key={el.id}
                to={`/categories/${el.id}`}
              >
                <li
                  // key={el.id}
                  className={'elemCategory'}
                >
                  {el.category}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </aside>
  );
};

export default AsideCategory;