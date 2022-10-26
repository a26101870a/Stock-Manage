import { createSlice } from "@reduxjs/toolkit";

//stock order index
const pointerList = []

const pointerListSlice = createSlice({
    name: "Pointer List",
    initialState: pointerList,
    reducers: {
        addToStockList(state, action) {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeFromStockList(state, action) {
            state.splice(
                state.findIndex((item) =>
                    item == action.payload), 1)
        }
    }
})

export const { addToStockList, removeFromStockList } = pointerListSlice.actions

export default pointerListSlice.reducer;