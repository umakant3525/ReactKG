//counter.js

import { createSlice } from "@reduxjs/toolkit";

// Define counter slice using createSlice
const counterSlice = createSlice({
    name: "counter",
    initialState: {
      counterVal: 0,
    },
    reducers: {
      increment: (state) => {
        state.counterVal++;
      },
      decrement: (state) => {
        state.counterVal--;
      },
      add: (state, action) => {
        state.counterVal += action.payload.num;
      },
      sub: (state, action) => {
        state.counterVal -= action.payload.num;
      },
    },
  });
//exporting object of slice 
export const counterActions = counterSlice.actions;

export default counterSlice