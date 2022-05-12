export interface NavLink {
  path: string;
  color: string;
  underline: "none" | "hover" | "always" | undefined;
  content: string;
}

export interface MenuItemProps {
  foodName: string;
  description: string;
  foodOptions?: foodOptions;
}

interface foodOptions {
  removeOptions?: foodOption[];
  addOptions?: foodOption[];
}

interface foodOption {
  optionName: string;
  price: number;
}
