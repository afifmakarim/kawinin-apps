import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "controlMusic",
  initialState: {
    isPlay: false,
  },
  reducers: {
    toggleMusic: (state: any) => {
      return { ...state, isPlay: !state.isPlay };
    },
    stopMusic: (state: any) => {
      return { ...state, isPlay: false };
    },
  },
});

export const musicReducer = musicSlice.reducer;

export const { toggleMusic, stopMusic } = musicSlice.actions;
