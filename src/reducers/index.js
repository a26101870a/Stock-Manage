import { combineReducers } from "redux";
import buyListReducer from "./buyListSlice";
import pointerListReducer from "./pointerListSlice";

export default combineReducers({
    buyList: buyListReducer,
    pointerList: pointerListReducer,
})