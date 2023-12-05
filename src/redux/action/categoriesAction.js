import axios from "axios";

export const getUsers = () => {
    return (dispatch) => {
        axios(`https://64e2ee93bac46e480e77eb43.mockapi.io/users`)
            // .then(res => dispatch({type: GET_USERS, payload: res.data}))
    }
}
