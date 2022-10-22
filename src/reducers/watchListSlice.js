import { createSlice, current } from "@reduxjs/toolkit";

const stockData = [
    {
        id: 1,
        number: '2330',
        name: '台積電',
        price: 397.50,
    },
];

let currentDataID = 1;

const watchListSlice = createSlice({
    name: "My stocks",
    initialState: stockData,
    reducers: {
        addStock(state, action) {
            const { number, name, price } = action.payload;
            state.push({
                id: (currentDataID += 1),
                number,
                name,
                price,
            });
        },
    }
})

export const { addStock } = watchListSlice.actions

export default watchListSlice.reducer;