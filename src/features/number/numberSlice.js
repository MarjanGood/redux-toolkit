import { createSlice } from "@reduxjs/toolkit";

import { increment as incrementCounter } from "../counter/counterSlice";
const initialState = {
  numberValue: 5,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.numberValue++;
    },

    decrement: (state, action) => {
      state.numberValue--;
    },
    incrementByAmount: (state, action) => {
      // state.counterValue = state.counterValue + action.payload;
      state.numberValue += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementCounter, (state, action) => {
      state.numberValue++;
    });
  },
  // extraReducers:{
  //     ["counter/increment"]:(state)=>{
  //         state.numberValue++;
  //     }
  // }
});

export default numberSlice.reducer;
export const { increment, decrement, incrementByAmount } = numberSlice.actions;
export const selectNumber = (store) => store.number.numberValue;
