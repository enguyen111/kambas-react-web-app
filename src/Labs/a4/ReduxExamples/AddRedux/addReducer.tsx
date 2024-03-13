import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    sum: 0,
};
const addSlice = createSlice({
    name: "add",
    initialState,
    //the parameters are encoded in the payload property found in the action parameter passed to the reducer
    reducers: {
        add: (state, action) => {
            state.sum = action.payload.a + action.payload.b;
        },
    },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;