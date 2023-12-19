import {CLEAR_CATEGORY, SET_CATEGORY, SET_PODCATEGORY} from "../types/types";

const initialState = {
    categories: [],
    podcategories: [],
}

export default function  categoriesReducer (state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, categories: action.payload}
        case SET_PODCATEGORY:
            return {...state, podcategories: action.payload[0], categories: action.payload[1]}
        case CLEAR_CATEGORY:
            return {}
        default:
            return state
    }
}