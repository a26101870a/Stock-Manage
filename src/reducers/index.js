import { combineReducers } from "redux";
import watchListReducer from "./watchListSlice";
import stockListReducer from "./stockListSlice";

export default combineReducers({
    watchList: watchListReducer,
    stockList: stockListReducer,
})