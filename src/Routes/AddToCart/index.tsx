import { useParams } from "react-router";
import { Stack } from "@mui/material";

//Components
import MenuImgCard from "./Components/MenuImgCard";
import FoodOptions from "./Components/FoodOptions";
import ReturnButton from "../../Components/ReturnButton";

//Styles
import { Wrapper, MenuContainer, Header } from "./AddToCart.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

//Data
import { menuItems } from "../../MenuItems";

const AddToCart = () => {
  const { foodId, foodType } = useParams();

  let menuItem;
  if (foodId !== undefined && foodType !== undefined) {
    menuItem = menuItems[foodType][+foodId];
  }

  return (
    <Wrapper>
      <Stack
        sx={{ width: 1, mb: "1rem" }}
        direction="row"
        justifyContent="space-between"
      >
        <Header variant="h4">Add To Cart:</Header>

        <ReturnButton path="/" />
      </Stack>

      {menuItem !== undefined ? (
        <MenuImgCard menuItem={menuItem} />
      ) : (
        <div>ERROR</div>
      )}
    </Wrapper>
  );
};

export default AddToCart;
