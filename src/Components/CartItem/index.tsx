import { useSelector, useDispatch } from "react-redux";
import { CardMedia, IconButton, Typography, Stack } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

//Components
import AdjustQtyInput from "../AdjustQtyInput";

//Styles
import { StyledDivider, StyledHeader, Price } from "./CartItem.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

const CartItem = ({
  menuItem,
  qty,
}: {
  menuItem: MenuItemPropsInterface;
  qty: number;
}) => {
  return (
    <Stack>
      <StyledHeader>{menuItem.foodName}</StyledHeader>
      <StyledDivider />
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <img src={menuItem.imgPath} alt="menuItemImg"></img>

        <div>
          <AdjustQtyInput></AdjustQtyInput>
          <Price>${menuItem.price * qty}</Price>
        </div>

        <IconButton>
          <DeleteRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default CartItem;
