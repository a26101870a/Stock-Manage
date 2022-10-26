import { combineReducers } from "redux";
import pointerListReducer from "./pointerListSlice";
import buyListReducer from "./buyListSlice";


export default combineReducers({
    pointerList: pointerListReducer,
    buyList: buyListReducer,
})