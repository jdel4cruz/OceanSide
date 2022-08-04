import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateIsAddToCartOpen } from "../../../../Redux/Reducers/cartReducer";

//Components
import MenuImgCard from "./Components/MenuImgCard";

//Styles
import { Wrapper } from "./AddToCart.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../../../interfaces";
import { RootState } from "../../../../Redux/store";

//Data
import { menuItemsArray } from "../../../../MenuItems";

const AddToCart = () => {
  const { isAddToCartOpen, currentMenuId } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  let menuItem;
  if (currentMenuId !== null) {
    menuItem = menuItemsArray.filter(
      (menuItem) => menuItem.foodId === currentMenuId
    )[0];
  }

  return (
    <Modal
      open={isAddToCartOpen}
      onClose={() => dispatch(updateIsAddToCartOpen({ isOpen: false }))}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Wrapper disableGutters>
        {menuItem !== undefined ? (
          <MenuImgCard menuItem={menuItem} />
        ) : (
          <div>ERROR</div>
        )}
      </Wrapper>
    </Modal>
  );
};

export default AddToCart;
