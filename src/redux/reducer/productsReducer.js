import {GET_PRODUCTS} from "../types/types";


const initialstate = {
  products: []
}

export default function productsReducer (state = initialstate, action){
  switch (action.type) {
    case GET_PRODUCTS:
      return {...state, products: action.payload}
    default:
      return state
  }
}