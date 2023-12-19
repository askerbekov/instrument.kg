import {ADD_CARTS_PRODUCT} from "../types/types";


const initialstate = {
  carts : [],
}

export default function cartReducer (state = initialstate, action) {
  switch (action.type){
    case ADD_CARTS_PRODUCT:
      return {...state, carts: [...state.carts, action.payload]}
    default:
      return state
  }
}