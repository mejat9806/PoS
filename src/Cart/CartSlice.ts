import { createSlice } from "@reduxjs/toolkit";

export type cartType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  totalPrice?: number;
};

export type CartState = {
  cart: cartType[];
};
const initialState: CartState = { cart: [] };

const CartSlice = createSlice({
  initialState: initialState,
  name: "CartSlice",
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQty(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQty(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
        if (item.quantity < 1) {
          CartSlice.caseReducers.deleteItem(state, action);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, increaseQty, decreaseQty, deleteItem, clearCart } =
  CartSlice.actions;

export const getChart = (state: any) => state.carts.cart;
export const getQuantity = (state: any) =>
  state.cart.reduce(
    (sum: number, pizza: { quantity: number }) => sum + pizza.quantity,
    0,
  );

export const getCartPrice = (state) =>
  state.carts.cart.reduce(
    (sum: number, pizza: { totalPrice: number }) => sum + pizza?.totalPrice,
    0,
  );

export function getCurrentQuantityById(id: number) {
  return function (state) {
    return state.carts.cart.find((item) => item.id === id)?.quantity ?? 0;
  };
}

export default CartSlice.reducer;
