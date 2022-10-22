import { createSlice } from "@reduxjs/toolkit";

//stock order index
const readyToBuyListIndex = []

const sotckListSlice = createSlice({
    name: "To Buy List",
    initialState: readyToBuyListIndex,
    reducers: {
        addToList(state, action) {
            if (!state.includes(action.payload)) {
                state.push(action.payload);
            }
        },
        removeFromList(state, action) {
            state.splice(
                state.findIndex((item) =>
                    item == action.payload), 1)
        }
    }
})

export const { addToList, removeFromList } = sotckListSlice.actions

export default sotckListSlice.reducer;