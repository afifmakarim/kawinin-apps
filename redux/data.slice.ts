import { createSlice } from "@reduxjs/toolkit";
import { WeddingDetails } from "../services/data-types";

const dataSlice = createSlice({
  name: "data",
  initialState: {} as WeddingDetails,
  reducers: {
    setData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const dataReducer = dataSlice.reducer;

export const { setData } = dataSlice.actions;
