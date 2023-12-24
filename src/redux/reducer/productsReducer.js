import {GET_PRODUCTS} from "../types/types";


const initialstate = {
  products: [],
  loading:true,
}

export default function productsReducer (state = initialstate, action){
  switch (action.type) {
    case "LOADING":
      return {...state, loading: action.payload}
    case GET_PRODUCTS:
      return {...state, products: action.payload}
    default:
      return state
  }
}