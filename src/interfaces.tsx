export interface NavLink {
  path: string;
  color: string;
  underline: "none" | "hover" | "always" | undefined;
  content: string;
}

export interface MenuItemProps {
  foodName: string;
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
