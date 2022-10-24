import { createSlice } from "@reduxjs/toolkit";

const toBuyList = [];

const toBuyListSlice = createSlice({
    name: "My stocks",
    initialState: toBuyList,
    reducers: {
        addStock(state, action) {
            const { number, name, price } = action.payload;
            state.push({
                number,
                name,
                price,
            });
        },
        removeStock(state, action) {
            state.splice(
                state.findIndex((item) =>
                    item.number == action.payload), 1)
        }
    }
})

export const {
    addStock,
    removeStock
} = toBuyListSlice.actions

export default toBuyListSlice.reducer;