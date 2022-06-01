import { Grid } from "@mui/material";

//Interfaces
import { MenuItemPropsInterface } from "../../../../interfaces";

//Components
import MenuCard from "../MenuCard";

//Styles
import { StyledGrid } from "./MenuGrid.styles";

//Data
import { menuItems } from "../../../../MenuItems";

const MenuGrid = ({ foodType }: { foodType: string }) => {
  let activeMenu: MenuItemPropsInterface[] | undefined;
  if (foodType !== undefined) {
    activeMenu = menuItems[foodType];
  }

  return (
    <StyledGrid container spacing={1} justifyContent="center">
      {activeMenu !== undefined ? (
        activeMenu.map((menuItem: MenuItemPropsInterface, i: number) => (
          <Grid item xs={11} sm={6} key={i} display="flex">
            <MenuCard menuItem={menuItem} id={i} />
          </Grid>
        ))
      ) : (
        <div>error</div>
      )}
    </StyledGrid>
  );
};

export default MenuGrid;
