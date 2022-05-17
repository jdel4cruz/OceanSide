import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Data
import { menuItems, menuItemsArray } from "../../MenuItems";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

interface CartItemInterface {
  menuItem: MenuItemPropsInterface;
  qty: number;
}

interface CartState {
  cart: CartItemInterface[];
}

interface CartActionPayload {
  foodType?: string;
  foodId: number;
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    newCartItem: (state, action: PayloadAction<CartActionPayload>) => {
      state.cart.push({
        qty: 1,
        menuItem: menuItemsArray.filter(
          (item) => item.foodId === action.payload.foodId
        )[0],
      });
    },
    addCartItem: (state, action: PayloadAction<CartActionPayload>) => {
      state.cart.forEach((cartItem) => {
        if (cartItem.menuItem.foodId === action.payload.foodId) {
          return (cartItem.qty += 1);
        }
      });
    },
    removeCartItem: (state, action: PayloadAction<CartActionPayload>) => {
      state.cart.forEach((cartItem) => {
        if (cartItem.menuItem.foodId === action.payload.foodId) {
          return (cartItem.qty -= 1);
        }
      });
    },
    deleteCartItem: (state, action: PayloadAction<CartActionPayload>) => {
      state.cart.filter(
        (item) => item.menuItem.foodId !== action.payload.foodId
      );
    },
  },
});

export const { newCartItem, addCartItem, removeCartItem, deleteCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
