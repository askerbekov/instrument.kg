import {GET_TOOL} from "../types/types";

const initialstate = {
  tool:{}
}

export default function toolReducer (state = initialstate, action){
  switch (action.type) {
    case GET_TOOL:
      return {...state, tool:action.payload}
    default:
      return state
  }
}