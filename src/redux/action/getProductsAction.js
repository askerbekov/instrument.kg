import axios from "axios";
import {GET_PRODUCTS} from "../types/types";


export const getProducts = () => {
  return (dispatch) => {
    axios(`https://dummyjson.com/products?limit=20`)
      .then(({data}) => {
        dispatch({type:'LOADING', payload: true})
        dispatch({type: GET_PRODUCTS, payload: data.products})
        setTimeout(() => {
            dispatch({type:"LOADING", payload:false})
          }
          , 1500)
      }
      )
      .catch(function (error){
        if (error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
  }
}