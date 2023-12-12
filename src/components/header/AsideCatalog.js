import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SET_CATEGORY} from "../../redux/types/types";

const AsideCatalog = ({el, handleHoverCatalog, podcatalog, setOpenCatalog}) => {
  const dispatch = useDispatch()

  return (
    <Link
      key={el.id}
      to={`/categories/${el.id}`}
      onClick={event => {
        dispatch({type: SET_CATEGORY, payload: el})
        setOpenCatalog(false)
      }}
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