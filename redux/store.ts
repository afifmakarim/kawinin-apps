import { configureStore } from "@reduxjs/toolkit";
import { musicReducer } from "./music.slice";
import { dataReducer } from "./data.slice";

const reducer = {
  music: musicReducer,
  data: dataReducer,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
