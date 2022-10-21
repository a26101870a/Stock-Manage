import { combineReducers } from "redux";
import watchListReducer from "./watchListSlice";

export default combineReducers({
    watchList: watchListReducer,
})