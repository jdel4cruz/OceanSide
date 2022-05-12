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
    description: "Baked at the break of dawn everyday.",
  },
  {
    foodName: "Smoked Salmon Avocado Toast",
    description:
      "Local cold-smoked salmon placed atop a slice of sourdough avocado toast.",
  },
  {
    foodName: "The Rise n'Shine",
    description:
      "What you need to hit the ground running. Sliced avocado fanned on top of a slice of ciabatta bread accompanied with a sunnyside egg.",
  },
  {
    foodName: "Gift of Elysium",
    description:
      "Made from the gardens of paradise(the farmers market). Contains free-range eggs, spinach, feta cheese, red-onion, and Monterey Jack cheese.",
  },
  {
    foodName: "Just Toast",
    description:
      "Sometimes simple is best. Accompanied with our homemade orange marmalade",
  },
  {
    foodName: "Chocolate Crepes",
    description:
      "Two of our housemade crepes topped with a chocolate drizzle, powdered sugar, whipped creme, and a scoop of vanilla bean ice cream",
  },
  {
    foodName: "Strawberry Pancakes",
    description:
      "A full stack of pancakes adorned with powdered sugar, fresh strawberries, and housemade strawberry syrup",
  },
  {
    foodName: "Triple Berry Waffles",
    description:
      "A massive waffle topped with vanilla crème fraîche and our triple berry compote",
  },
];

const MenuGrid = () => {
  return (
    <StyledGrid container spacing={1}>
      {menuItems.map((menuItem) => (
        <Grid item xs={11} sm={6}>
          <MenuCard menuItem={menuItem} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default MenuGrid;
