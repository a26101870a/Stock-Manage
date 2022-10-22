import { createSlice, current } from "@reduxjs/toolkit";

const stockData = [];

const watchListSlice = createSlice({
    name: "My stocks",
    initialState: stockData,
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
                    item.number == action.payload)
            )
        }
    }
})

export const { addStock, removeStock } = watchListSlice.actions

export default watchListSlice.reducer;