import { CardMedia, IconButton, Typography, Stack } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

//Components
import AdjustQtyInput from "../AdjustQtyInput";

//Styles
import { StyledDivider, StyledHeader, Price } from "./CartItem.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

const CartItem = () => {
  /*Will get current state of cart item based on props passed. Buttons will send actions to 
    increment and decrement qty of cart item. Trash icon will be used to remove item from cart altogether.

  */

  return (
    <Stack>
      <StyledHeader>MenuItemName</StyledHeader>
      <StyledDivider />
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <img src="" alt="menuItemImg"></img>

        <div>
          <AdjustQtyInput></AdjustQtyInput>
          <Price>{}</Price>
        </div>

        <IconButton>
          <DeleteRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default CartItem;
