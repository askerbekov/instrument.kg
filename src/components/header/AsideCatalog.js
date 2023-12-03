import React from 'react';

const AsideCatalog = ({el, handleHoverCatalog, podcatalog}) => {
  return (
    <a href={'#'}>
      <li
        key={el.id}
        className={`elemCategory ${el.id === podcatalog.id ? 'selected' : ''}`}
        onMouseOver={event => handleHoverCatalog(el)}
      >
        {el.category}
      </li>
    </a>
  );
};

export default AsideCatalog;