import {GET_PROMO_PRODUCTS} from "../types/types";


const initialState = {
  promoProducts : [],
}

export default function promoProductReducer (state= initialState, action) {
  // console.log(action)
  switch (action.type){
    case GET_PROMO_PRODUCTS:
      return {...state, promoProducts: action.payload}
    default :
      return state
  }
}