import { combineReducers } from "redux";
import toBuyListReducer from "./toBuyListSlice";
import pointerListReducer from "./pointerListSlice";

export default combineReducers({
    toBuyList: toBuyListReducer,
    pointerList: pointerListReducer,
})