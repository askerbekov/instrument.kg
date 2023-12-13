import axios from "axios";
import {GET_PROMO_PRODUCTS} from "../types/types";

export const getPromoProducts = () => {
  return (dispatch) => {
    axios(`https://dummyjson.com/products?limit=10`)
      .then(({data}) => dispatch({type:GET_PROMO_PRODUCTS, payload: data.products}))
  }
}