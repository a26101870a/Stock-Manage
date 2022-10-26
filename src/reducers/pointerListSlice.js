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
            const { code } = action.payload;
            if (!state.boardList.includes(code)) {
                state.boardList.push(code);
            }
        },
        removeFromboardList(state, action) {
            const { code } = action.payload;
            state.boardList.splice(
                state.boardList.findIndex((item) =>
                    item == code), 1)
        },
        addToStockList(state, action) {
            const { code } = action.payload;
            if (!state.stockList.includes(code)) {
                state.stockList.push(code);
            }
        },
        removeFromStockList(state, action) {
            const { code } = action.payload;
            state.stockList.splice(
                state.stockList.findIndex((item) =>
                    item == code), 1)
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