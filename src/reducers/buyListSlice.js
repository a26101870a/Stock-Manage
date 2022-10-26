import { createSlice } from "@reduxjs/toolkit";

const toBuyList = [];

const toBuyListSlice = createSlice({
    name: "To Buy List",
    initialState: toBuyList,
    reducers: {
        addToBuyList(state, action) {
            const { number, name, price } = action.payload;
            state.push({
                number,
                name,
                price,
            });
        },
        removeFromBuyList(state, action) {
            state.splice(
                state.findIndex((item) =>
                    item.number == action.payload), 1)
        }
    }
})

export const {
    addToBuyList,
    removeFromBuyList
} = toBuyListSlice.actions

export default toBuyListSlice.reducer;