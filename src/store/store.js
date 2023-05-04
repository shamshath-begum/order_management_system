import { configureStore } from "@reduxjs/toolkit";
import chickenSlice from "./reducer";
import apiSlice from "./apiSlice";

export const store = configureStore({
  reducer: {
    chicken: chickenSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
