import axios from "axios";
import {GET_PRODUCTS} from "../types/types";


export const getProducts = () => {
  return (dispatch) => {
    // dispatch({type:'LOADING', payload: true})
    axios(`https://dummyjson.com/products?limit=20`)
      .then(({data}) => {
        dispatch({type: GET_PRODUCTS, payload: data.products})
      }
      )
      .catch(function (error){
        if (error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
      .finally(()=>{
        dispatch({type:"LOADING", payload:false})
      })
  }
}