import React, {useRef, useState} from 'react';

const PodcategoryList = ({el}) => {
  const [showAll, setShowAll] = useState(false)
  const showAllBtn = () => {
    setShowAll(!showAll)
  }
  return (
    <>
      <ul className={`ul-podcategories ${showAll? 'height-unset' :'height-hidden' }`}>
        { el.podcategoriy.map((elemPodcat, i) => {
          return(
            <a href={'/'}>
              <li key={i} className={'podcategory'}>
                {elemPodcat}
              </li>
            </a>
          )
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