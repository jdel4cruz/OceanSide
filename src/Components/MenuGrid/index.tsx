import { Grid } from "@mui/material";

//Interfaces
import { MenuItemProps } from "../../interfaces";

//Components
import MenuCard from "../MenuCard";

//Styles
import { StyledGrid } from "./MenuGrid.styles";

const menuItems: MenuItemProps[] = [
  {
    foodName: "Blueberry Banana French Toast",
    description:
      "French Toast made with Japanese Shokupan bread. Topped with blueberries and bananas, dusted with powdered sugar, and finished with maple syrup.",
  },
  {
    foodName: "Homemade Croissants",
    description: "Fresh made every morning!",
  },
  {
    foodName: "Homemade Croissants",
    description: "Fresh made every morning!",
  },
];

const MenuGrid = () => {
  return (
    <StyledGrid container spacing={1}>
      {menuItems.map((menuItem) => (
        <Grid item xs={11}>
          <MenuCard menuItem={menuItem} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default MenuGrid;
