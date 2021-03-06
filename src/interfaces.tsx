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

export interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orderNotes: string;
  tips: string;
  tax: string;
  cart: CartItemInterface[];
  total: string;
}

export interface IContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
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

export interface InputProps {
  name: string;
  defaultValue: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  type: string;
  label: string;
  id: string;
  placeholder: string;
  sx: { width: number };
  required: boolean;
  multiline?: boolean;
  rows?: string;
}
