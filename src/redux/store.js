import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/data";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
