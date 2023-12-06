import {GET_USERS} from "../types/types";

const initialState = {
    categories: [],
}

export default function  usersReducer (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {...state, circles: action.payload}
        default:
            return state
    }
}