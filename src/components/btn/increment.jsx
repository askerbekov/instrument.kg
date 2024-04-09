import React, {useEffect, useState} from 'react';
import './increment.scss'
import {useDispatch} from "react-redux";
import { PRICE_QUANTITY_DECREMENT, PRICE_QUANTITY_PLUS, QUANTITY_PRODUCT} from "../../redux/types/types";

const Increment = ({product}) => {
  const [res, setRes] = useState(1)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch({type: QUANTITY_PRODUCT, payload:{id:product.id, quantity:res}})
  },[res])

  const handleQuantity = (event) => {
    setRes(Number(event))
    dispatch({type:PRICE_QUANTITY_PLUS, payload: res * product.price})
  }

  const increment = () => {
    setRes(res+1)
    dispatch({type:PRICE_QUANTITY_PLUS, payload: product.price})
  }

  const decrement = () => {
    if (res > 1){
      setRes(res-1)
      dispatch({type:PRICE_QUANTITY_DECREMENT, payload: product.price})
    }
  }

  return (
    <div className={'increment'}>
      <button
        className={'btn-quantity'}
        onClick={event => {
          decrement()
        }}
      >
        -
      </button>
      <input
        className={'res'}
        // defaultValue={res}
        value={res}
        onChange={event => handleQuantity(event.target.value)}
        type="number"/>
      <button
        className={'btn-quantity c-black'}
        onClick={event => {
          increment()
          // setRes(res + 1)
        }}
      >
        +
      </button>
    </div>
  );
};

export default Increment;