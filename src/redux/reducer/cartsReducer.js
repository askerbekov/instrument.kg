import {ADD_CARTS_PRODUCT, DELETE_PRODUCT, QUANTITY_PRODUCT} from "../types/types";


const initialstate = {
  carts : [],
  order : []
}

export default function cartReducer (state = initialstate, action) {
  switch (action.type){
    case ADD_CARTS_PRODUCT:
      return {...state, carts: [...state.carts, action.payload], order: [...state.order, {prodctId:action.payload.id, quentity:1}]}
    case DELETE_PRODUCT:
      return {...state, carts: state.carts.filter(el => el.id !== action.payload.id), order: state.order.filter(el => el.prodctId !== action.payload.id)}
    case "CLEAR":
      return initialstate
    default:
      return state
  }
}