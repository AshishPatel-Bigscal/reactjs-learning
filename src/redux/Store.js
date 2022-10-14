import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "./RootReducers";

const store = createStore(rootReducers, applyMiddleware(thunk))
export default store