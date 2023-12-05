import React from 'react';
import {Link} from "react-router-dom";

const AsideCatalog = ({el, handleHoverCatalog, podcatalog, setOpenCatalog}) => {
  return (
    <Link
      key={el.id}
      to={`/categories/${el.id}`}
      onClick={event => setOpenCatalog(false)}
    >
      <li
        className={`elemCategory ${el.id === podcatalog.id ? 'selected' : ''}`}
        onMouseOver={event => handleHoverCatalog(el)}
      >
        {el.category}
      </li>
    </Link>
  );
};

export default AsideCatalog;