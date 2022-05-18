import { useSelector, useDispatch } from "react-redux";
import {
  deleteCartItem,
  removeCartItem,
  addCartItem,
} from "../../Redux/Reducers/cartReducer";
import { AppDispatch } from "../../Redux/store";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

//Components
import AdjustQtyInput from "../AdjustQtyInput";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  MediaContainer,
  Price,
  StyledContent,
} from "./CartItem.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";
import { CardMedia, IconButton } from "@mui/material";

const CartItem = ({
  menuItem,
  qty,
}: {
  menuItem: MenuItemPropsInterface;
  qty: number;
}) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <StyledCard>
      <StyledHeader title={menuItem.foodName} />
      <StyledDivider />
      <StyledContent>
        <MediaContainer>
          <CardMedia component="img" image={menuItem.imgPath} />
        </MediaContainer>

        <Price>Placeholder</Price>
        <IconButton>
          <DeleteRoundedIcon></DeleteRoundedIcon>
        </IconButton>
      </StyledContent>
    </StyledCard>
  );
};

export default CartItem;
