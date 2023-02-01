import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: {
    cartItems: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      const addItem = state.cart.cartItems.find((x) => x._id === payload._id);
      const cartItems = addItem
        ? state.cart.cartItems.map((x) =>
            x._id === addItem._id ? { ...x, quantity: x.quantity + 1 } : x
          )
        : [...state.cart.cartItems, { ...payload, quantity: 1 }];
      toast.success("Đã thêm sản phẩm vào giỏ hàng thành công");
      return { ...state, cart: { ...state.cart, cartItems } };
    },
    decreaseCart: (state, { payload }) => {
      const deleteItem = state.cart.cartItems.find(
        (x) => x._id === payload._id
      );
      const cartItems =
        payload.quantity === 1
          ? state.cart.cartItems.filter((x) => x._id !== deleteItem._id)
          : state.cart.cartItems.map((x) =>
              x._id === deleteItem._id ? { ...x, quantity: x.quantity - 1 } : x
            );
      return { ...state, cart: { ...state.cart, cartItems } };
    },
    removeCart: (state, { payload }) => {
      const deleteItem = state.cart.cartItems.find(
        (x) => x._id === payload._id
      );
      const cartItems = state.cart.cartItems.filter(
        (x) => x._id !== deleteItem._id
      );

      return { ...state, cart: { ...state.cart, cartItems } };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, decreaseCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
