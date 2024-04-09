import {
  ADD_CARTS_PRODUCT,
  DELETE_PRODUCT, POPUP, POPUP_OFF,
  PRICE,
  PRICE_QUANTITY_DECREMENT,
  PRICE_QUANTITY_PLUS,
  QUANTITY_PRODUCT
} from "../types/types";


const initialstate = {
  carts : [],
  order : [],
  price: 0,
  popup: {
    isTrue : false,
    porduct: {},
  }
}

export default function cartReducer (state = initialstate, action) {
  switch (action.type){
    case POPUP:
      return {...state, popup: {isTrue: true, product: action.payload}}
    case POPUP_OFF:
      return {...state, popup: {isTrue: false, product: {}} }
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
    case PRICE:
      return {...state, price: state.carts.reduce((acc, product) => acc + product.price ,0) }
    case PRICE_QUANTITY_PLUS:
      return {...state, price: state.price + action.payload}
    case PRICE_QUANTITY_DECREMENT:
      return {...state, price: state.price - action.payload}
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