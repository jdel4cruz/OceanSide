import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../Redux/Reducers/cartReducer";
import { AppDispatch } from "../../Redux/store";

import { Typography } from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

//Components
import AdjustCartQty from "../AdjustCartQty";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  ContentContainer,
  StyledContent,
} from "./CartItem.styles";

//Helper Functions
import { priceToString } from "../../HelperFunctions";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";
import { CardMedia, IconButton } from "@mui/material";

const CartItem = ({
  menuItem,
  qty,
  price,
  cartId,
}: {
  menuItem: MenuItemPropsInterface;
  qty: number;
  price: number;
  cartId: number;
}) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <StyledCard>
      <StyledHeader title={menuItem.foodName} />
      <StyledDivider />
      <StyledContent>
        <ContentContainer>
          <CardMedia component="img" image={menuItem.imgPath} />
        </ContentContainer>
        <ContentContainer>
          <AdjustCartQty qty={qty} cartId={cartId} />
          <Typography>{`Price ${priceToString(price)}`}</Typography>
        </ContentContainer>

        <IconButton onClick={() => dispatch(deleteCartItem({ cartId }))}>
          <DeleteRoundedIcon></DeleteRoundedIcon>
        </IconButton>
      </StyledContent>
    </StyledCard>
  );
};

export default CartItem;
