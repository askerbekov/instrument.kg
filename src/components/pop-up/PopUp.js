import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {POPUP_OFF} from "../../redux/types/types";
import './popup.scss'

const PopUp = () => {
  const popup = useSelector(state => state.cartReducer.popup?.isTrue)
  const product = useSelector(state => state.cartReducer.popup?.product)
  const dispatch = useDispatch()
  console.log(popup)
  const popupOff = () => {
    dispatch({type:POPUP_OFF})
  }

  useEffect(() => {
    setTimeout(popupOff,3000)
  },[popup])


  return (
    <div className={popup ? ' popup popupActive' : 'popup'}>
      <i className={'icon icon-chek'}></i>
      <p>Ваш товар <span>{product?.title}</span> был добавлен в корзину!</p>
    </div>
  );
};

export default PopUp;