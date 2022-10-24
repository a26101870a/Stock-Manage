import { createSlice } from "@reduxjs/toolkit";

//stock order index
const pointerList = []

const pointerListSlice = createSlice({
    name: "To Buy List",
    initialState: pointerList,
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

export const { addToList, removeFromList } = pointerListSlice.actions

export default pointerListSlice.reducer;