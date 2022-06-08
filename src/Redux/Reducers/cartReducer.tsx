import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Interfaces
import { MenuItemPropsInterface, CartItemInterface } from "../../interfaces";

//Helper Functions
import { totalPrice, cartTotalPrice } from "../../HelperFunctions";

interface CartState {
  cart: CartItemInterface[];
  nextId: number;
  tax: number;
  total: number;
  currentMenuId: number | null;
  isCartOpen: boolean;
  isAddToCartOpen: boolean;
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
  tax: 0.086,
  total: 0,
  currentMenuId: null,
  isCartOpen: false,
  isAddToCartOpen: false,
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
      state.total = cartTotalPrice(state.cart);
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
      state.total = cartTotalPrice(state.cart);
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
      if (state.cart.length === 0) {
        state.total = 0;
      }
      state.total = cartTotalPrice(state.cart);
    },
    deleteCartItem: (
      state,
      action: PayloadAction<UpdateCartItemActionPayload>
    ) => {
      state.cart = state.cart.filter(
        (item) => item.cartId !== action.payload.cartId
      );
      if (state.cart.length === 0) {
        state.total = 0;
      }
      state.total = cartTotalPrice(state.cart);
    },
    updateCurrentMenuId: (state, action: PayloadAction<{ menuId: number }>) => {
      state.currentMenuId = action.payload.menuId;
    },
    updateIsCartOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.isCartOpen = action.payload.isOpen;
    },
    updateIsAddToCartOpen: (
      state,
      action: PayloadAction<{ isOpen: boolean }>
    ) => {
      state.isAddToCartOpen = action.payload.isOpen;
    },
  },
});

export const {
  newCartItem,
  addCartItem,
  removeCartItem,
  deleteCartItem,
  updateCurrentMenuId,
  updateIsAddToCartOpen,
  updateIsCartOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
