import React, {useEffect, useState} from 'react';
import './increment.scss'
import {useDispatch} from "react-redux";

const Increment = ({product}) => {
  const [res, setRes] = useState(1)
  const dispatch = useDispatch()


  const decrement = () => {
    if (res > 1){
      setRes(res-1)
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
        defaultValue={res}
        value={res}
        type="number"/>
      <button
        className={'btn-quantity c-black'}
        onClick={event => setRes(res+1)}
      >
        +
      </button>
    </div>
  );
};

export default Increment;