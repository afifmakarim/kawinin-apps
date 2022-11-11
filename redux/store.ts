import { configureStore } from "@reduxjs/toolkit";
import { musicReducer } from "./music.slice";

const reducer = {
  music: musicReducer,
};

const store = configureStore({
  reducer,
});

export default store;
