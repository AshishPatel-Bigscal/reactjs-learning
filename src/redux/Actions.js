import axios from "axios";
import {
    GET_USER_DETAIL, REGISTER_USER, BASE_URL_USER, BASE_URL_CART, BASE_URL_PRODUCTS, GET_USER_ERROR
} from "./Constants";


export function getUserDetail() {
    return async (dispatch) => {
        try {
            await axios.get(BASE_URL_USER)
                .then(res => res.data)
                .then(res => dispatch({ type: GET_USER_DETAIL, payload: res }))
                .catch(err => dispatch({ type: GET_USER_ERROR, payload: err }))
            dispatch()
        } catch (err) {
            console.log("ERROR in getUserData : ", err.message)
        }
    }
}


export function registerUser(userDetail) {
    return async (dispatch) => {
        await axios.post(BASE_URL_USER, userDetail)
        dispatch({ type: REGISTER_USER })
    }
}


export function getProducts(searchText) {
    let finalQuery;
    searchText ?

    return async (dispatch) => {

    }
}