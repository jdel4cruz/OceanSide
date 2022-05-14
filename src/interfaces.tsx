export interface NavLink {
  path: string;
  color: string;
  underline: "none" | "hover" | "always" | undefined;
  content: string;
}

export interface MenuItemsInterface {
  [index: string]: MenuItemProps[];
}

export interface setStateButtonInterface {
  setStateFunc: (value: string) => void;
  value: string;
  variant: "contained" | "outlined" | "text";
  content: string;
}

export interface MenuItemProps {
  foodName: string;
  foodType: "breakfast" | "beverages";
  description: string;
  imgPath?: string;
  foodOptions?: foodOptionsInterface;
}

export interface foodOptionsInterface {
  removeOptions?: foodOptionInterface[];
  addOptions?: foodOptionInterface[];
}

export interface foodOptionInterface {
  optionName: string;
  price: number;
}
