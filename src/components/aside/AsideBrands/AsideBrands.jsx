import React, {memo} from 'react';
import './asideBrands.scss'
import {Link} from "react-router-dom";
const AsideBrands = memo(() => {

  const brands = [
    "denzel",
    "matrix",
    "stels",
    "сибирьтех",
    "барс",
    "sparta",
    "palisad",
    "elfe",
    "stern",
    "kronwerk",
    "makita",
    "строймарш",
  ]
  return (
    <aside className={'aside-brands'}>
      <div className={'brands-wrap'}>
        <h2>Бренды</h2>
        <ul className={'brands-list'}>
          {
            brands.map(brand => {
              return(
                <Link to={`/brands/${brand}`}>
                  <li className={'elemCategory'}>{brand}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>

    </aside>
  );
});

export default AsideBrands;