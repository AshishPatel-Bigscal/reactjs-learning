import { combineReducers } from "redux";
import { authReducer, cartReducer, productReducer } from "./Reducers";

const rootReducers = combineReducers({
    authReducer, cartReducer, productReducer
})

export default rootReducers