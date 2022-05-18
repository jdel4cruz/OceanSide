import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Data
import { menuItems, menuItemsArray } from "../../MenuItems";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

//Helper Functions
import { totalPrice } from "../../HelperFunctions";

interface CartItemInterface {
  menuItem: MenuItemPropsInterface;
  qty: number;
  options: {
    [index: string]: boolean;
  };
  price: number;
  cartId: number;
}

interface CartState {
  cart: CartItemInterface[];
  nextId: number;
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
