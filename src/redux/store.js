import { configureStore } from "@reduxjs/toolkit";
import { globalsReducer } from "../slices/globalsSlice";

export const store = configureStore({
  reducer: {
    globals: globalsReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
