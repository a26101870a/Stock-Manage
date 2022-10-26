import { createSlice } from "@reduxjs/toolkit";

const toBuyList = [];

const toBuyListSlice = createSlice({
    name: "To Buy List",
    initialState: toBuyList,
    reducers: {
        addToBuyList(state, action) {
            const { code, name, price } = action.payload;
            state.push({
                code,
                name,
                price,
                amount: 0,
            });
        },
        removeFromBuyList(state, action) {
            state.splice(
                state.findIndex((item) =>
                    item.code == action.payload), 1)
        },
        increaseStockAmount(state, action) {
            const { code } = action.payload;
            let index = state.findIndex((item) =>
                item.code == code)
            state[index].amount += 1
        },
        decreaseStockAmount(state, action) {
            const { code } = action.payload;
            let index = state.findIndex((item) =>
                item.code == code)
            if (state[index].amount > 0) {
                state[index].amount -= 1
            }
        },
    }
})

export const {
    addToBuyList,
    removeFromBuyList,
    increaseStockAmount,
    decreaseStockAmount,
} = toBuyListSlice.actions

export default toBuyListSlice.reducer;