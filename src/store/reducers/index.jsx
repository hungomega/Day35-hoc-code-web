import { combineReducers } from "redux";
import productRender from "./productReducer.jsx";
const initState = {};
// const rootReducer = (state = initState) => {};

// combineReducers trong Redux dùng để gộp nhiều reducer nhỏ thành một reducer tổng để quản lý state của ứng dụng.
const rootReducer = combineReducers({  //  reducer  cha
    product: productRender, // reducer con
});

export default rootReducer;
