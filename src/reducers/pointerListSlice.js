import { createSlice } from "@reduxjs/toolkit";

//stock order index
const pointerList = {
    boardList: [],
    stockList: []
}

const pointerListSlice = createSlice({
    name: "Pointer List",
    initialState: pointerList,
    reducers: {
        addToboardList(state, action) {
            if (!state.boardList.includes(action.payload)) {
                state.boardList.push(action.payload);
            }
        },
        removeFromboardList(state, action) {
            state.boardList.splice(
                state.boardList.findIndex((item) =>
                    item == action.payload), 1)
        },
        addToStockList(state, action) {
            if (!state.stockList.includes(action.payload)) {
                state.stockList.push(action.payload);
            }
        },
        removeFromStockList(state, action) {
            state.stockList.splice(
                state.stockList.findIndex((item) =>
                    item == action.payload), 1)
        }
    }
})

export const {
    addToboardList,
    removeFromboardList,
    addToStockList,
    removeFromStockList
} = pointerListSlice.actions

export default pointerListSlice.reducer;