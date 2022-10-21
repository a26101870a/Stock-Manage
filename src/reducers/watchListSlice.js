import { createSlice } from "@reduxjs/toolkit";

const stockData = [
    {
        id: 1,
        number: '2330',
        name: '台積電',
        price: '397.50',
    },
];

const stocksWatchListSlice = createSlice({
    name: "stocks",
    initialState: stockData,
    reducers: {}
})

export default stocksWatchListSlice.reducer;