import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../slices/homeSlice";
import plansReducer from "../slices/plansSlice";


export const store = configureStore({
  reducer: {
    home: homeReducer,
    plans: plansReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
