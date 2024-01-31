import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./src/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    carts: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
