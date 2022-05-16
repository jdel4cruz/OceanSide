import { CardMedia, IconButton, Typography, Stack } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

//Components
import AdjustQtyInput from "../AdjustQtyInput";

//Styles
import { StyledDivider, StyledHeader, Price } from "./CartItem.styles";

//Interfaces
import { MenuItemProps } from "../../interfaces";

const CartItem = ({ menuItem }: { menuItem: MenuItemProps }) => {
  return (
    <Stack>
      <StyledHeader title={menuItem.foodName} />
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
