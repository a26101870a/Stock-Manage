import { combineReducers } from "redux";
import watchListSlice from "./watchListSlice";

export default combineReducers({
    watchList: watchListSlice,
})