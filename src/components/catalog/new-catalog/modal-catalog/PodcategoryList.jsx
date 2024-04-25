import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";

const PodcategoryList = ({el}) => {
  const [showAll, setShowAll] = useState(false)
  const showAllBtn = () => {
    setShowAll(!showAll)
  }
  return (
    <>
      <ul className={`ul-podcategories`}>
        { el.podcategoriy.map((elemPodcat, i) => {
          if (!showAll && i < 8){
            return(
              <Link to={`/${el.category.replaceAll(' ', '_')}/${el.id}/${elemPodcat.replace(' ', '_')}/${i}`} key={i}>
                <li className={'podcategory'}>
                  {elemPodcat}
                </li>
              </Link>
            )
          }
          if (showAll){
            return(
              <Link to={`/${el.category.replaceAll(' ', '_')}/${el.id}/${elemPodcat.replace(' ', '_')}/${i}`} key={i}>
                <li className={'podcategory'}>
                  {elemPodcat}
                </li>
              </Link>
            )
          }

        })
        }
      </ul>
      <button
        className={'show-all'}
        onClick={event => showAllBtn()}
      >
        { showAll? 'Скрыть' : 'Показать все'}
      </button>
    </>
  );
};

export default PodcategoryList;