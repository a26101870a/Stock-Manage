import { createSlice } from "@reduxjs/toolkit";

const toBuyList = [
    {
        code: 'Test Code',
        name: 'Test Name',
        price: 'Test Price',
        amount: 5
    }
];

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
    }
})

export const {
    addToBuyList,
    removeFromBuyList
} = toBuyListSlice.actions

export default toBuyListSlice.reducer;