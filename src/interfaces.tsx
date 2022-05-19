export interface NavLink {
  path: string;
  color: string;
  underline: "none" | "hover" | "always" | undefined;
  content: string;
}

export interface MenuItemsInterface {
  [index: string]: MenuItemPropsInterface[];
}

export interface setStateButtonInterface {
  setStateFunc: (value: string) => void;
  value: string;
  variant: "contained" | "outlined" | "text";
  content: string;
}

export interface MenuItemPropsInterface {
  foodId: number;
  foodName: string;
  foodType: "breakfast" | "beverages";
  description: string;
  imgPath?: string;
  foodOptions?: foodOptionsInterface;
  price: number;
}

export interface foodOptionsInterface {
  removeOptions?: foodOptionInterface[];
  addOptions?: foodOptionInterface[];
}

export interface foodOptionInterface {
  optionName: string;
  price: number;
}

export interface CartItemInterface {
  menuItem: MenuItemPropsInterface;
  qty: number;
  options: {
    [index: string]: boolean;
  };
  price: number;
  cartId: number;
}
