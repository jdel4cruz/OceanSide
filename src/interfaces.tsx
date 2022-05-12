export interface NavLink {
  path: string;
  color: string;
  underline: "none" | "hover" | "always" | undefined;
  content: string;
}

export interface MenuItemProps {
  foodName: string;
  description: string;
}
