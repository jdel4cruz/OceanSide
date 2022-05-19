import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Interfaces
import { MenuItemPropsInterface, CartItemInterface } from "../../interfaces";

//Helper Functions
import { totalPrice } from "../../HelperFunctions";

interface CartState {
  cart: CartItemInterface[];
  nextId: number;
  tax: number;
}

interface NewCartItemActionPayload {
  menuItem: MenuItemPropsInterface;
  qty: number;
  price: number;
  extraOptions: {
    [index: string]: boolean;
  };
}

interface UpdateCartItemActionPayload {
  cartId: number;
}

const initialState: CartState = {
  cart: [],
  nextId: 0,
  tax: 0.056,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    newCartItem: (state, action: PayloadAction<NewCartItemActionPayload>) => {
      state.cart.push({
        qty: action.payload.qty,
        menuItem: action.payload.menuItem,
        options: action.payload.extraOptions,
        price: action.payload.price,
        cartId: state.nextId,
      });
      state.nextId += 1;
    },
    addCartItem: (
      state,
      action: PayloadAction<UpdateCartItemActionPayload>
    ) => {
      state.cart.forEach((cartItem) => {
        if (cartItem.cartId === action.payload.cartId) {
          cartItem.qty += 1;
          cartItem.price = totalPrice(
            cartItem.options,
            cartItem.menuItem,
            cartItem.qty
          );
        }
      });
    },
    removeCartItem: (
      state,
      action: PayloadAction<UpdateCartItemActionPayload>
    ) => {
      state.cart.forEach((cartItem) => {
        if (cartItem.cartId === action.payload.cartId) {
          cartItem.qty -= 1;
          cartItem.price = totalPrice(
            cartItem.options,
            cartItem.menuItem,
            cartItem.qty
          );
        }
      });
    },
    deleteCartItem: (
      state,
      action: PayloadAction<UpdateCartItemActionPayload>
    ) => {
      state.cart = state.cart.filter(
        (item) => item.cartId !== action.payload.cartId
      );
    },
  },
});

export const { newCartItem, addCartItem, removeCartItem, deleteCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
