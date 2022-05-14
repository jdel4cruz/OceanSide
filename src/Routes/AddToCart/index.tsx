import { useParams } from "react-router";

//Components
import MenuImgCard from "../../Components/MenuImgCard";
import FoodOptions from "../../Components/FoodOptions";
import ReturnButton from "../../Components/ReturnButton";

//Styles
import { Wrapper, MenuContainer, Header } from "./AddToCart.styles";

//Interfaces
import { MenuItemProps } from "../../interfaces";

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
      <ReturnButton />
      <Header variant="h5">Add To Cart:</Header>
      {menuItem !== undefined ? (
        <MenuImgCard menuItem={menuItem} />
      ) : (
        <div>ERROR</div>
      )}
    </Wrapper>
  );
};

export default AddToCart;
