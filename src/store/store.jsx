import {
    legacy_createStore as createStore,
    combineReducers,
} from "redux";

//  Reducers
import productReducer from "./product/reducer.js";
// import { combineReducers } from "redux";

const rootReducer = combineReducers({
    product: productReducer,
});

const store = createStore(rootReducer);

window.store = store;

export default store;
