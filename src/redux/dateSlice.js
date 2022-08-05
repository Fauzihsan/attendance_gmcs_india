import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    timestamp: "",
  },
  reducers: {
    SET_DATE: (state, action) => {
      state.timestamp = action.payload;
    },
  },
});

export const { SET_DATE } = dateSlice.actions;

export default dateSlice.reducer;
