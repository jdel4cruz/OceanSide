import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Data
import { menuItems, menuItemsArray } from "../../MenuItems";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

interface CartItemInterface {
  menuItem: MenuItemPropsInterface;
  qty: number;
  options: {
    [index: string]: boolean;
  };
  price: number;
}

interface CartState {
  cart: CartItemInterface[];
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
  foodId: number;
}

const initialState: CartState = {
  cart: [],
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
      });
    },
    addCartItem: (
      state,
      action: PayloadAction<UpdateCartItemActionPayload>
    ) => {
      state.cart.forEach((cartItem) => {
        if (cartItem.menuItem.foodId === action.payload.foodId) {
          return (cartItem.qty += 1);
        }
      });
    },
    removeCartItem: (
      state,
      action: PayloadAction<UpdateCartItemActionPayload>
    ) => {
      state.cart.forEach((cartItem) => {
        if (cartItem.menuItem.foodId === action.payload.foodId) {
          return (cartItem.qty -= 1);
        }
      });
    },
    deleteCartItem: (
      state,
      action: PayloadAction<UpdateCartItemActionPayload>
    ) => {
      state.cart.filter(
        (item) => item.menuItem.foodId !== action.payload.foodId
      );
    },
  },
});

export const { newCartItem, addCartItem, removeCartItem, deleteCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
