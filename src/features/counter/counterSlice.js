import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counterValue:0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.counterValue++;
        },
        
        decrement:(state,action)=>{
            state.counterValue--;
        },
        incrementByAmount:(state,action)=>{
            debugger;
           // state.counterValue = state.counterValue + action.payload;
            state.counterValue += action.payload;
        }
    }
})

export default counterSlice.reducer;
export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export const selectCounter=(store)=> store.counter.counterValue;