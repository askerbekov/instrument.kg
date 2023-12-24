import {ADD_CARTS_PRODUCT, DELETE_PRODUCT, QUANTITY_PRODUCT} from "../types/types";


const initialstate = {
  carts : [],
  order : []
}

export default function cartReducer (state = initialstate, action) {
  switch (action.type){
    case ADD_CARTS_PRODUCT:
      return {...state,
        carts: [...state.carts, action.payload],
        order: [...state.order, {productId:action.payload.id, quantity:1}]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        carts: state.carts.filter(el => el.id !== action.payload.id),
        order: state.order.filter(el => el.productId !== action.payload.id)
      }
    case QUANTITY_PRODUCT:
      return {
        ...state,
        order: state.order.map(el => el.productId === action.payload.id ? {...el, quantity: action.payload.quantity} : el)}
    case "CLEAR":
      return initialstate
    default:
      return state
  }
}