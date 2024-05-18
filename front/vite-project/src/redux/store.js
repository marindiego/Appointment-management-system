import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices"

const store = configureStore({
  reducer: appSlice,
  //devTools: true,
});

export default store;