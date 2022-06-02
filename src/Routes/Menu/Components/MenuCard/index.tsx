import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  updateCurrentMenuId,
  updateIsAddToCartOpen,
} from "../../../../Redux/Reducers/cartReducer";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  StyledContent,
} from "./MenuCard.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../../../interfaces";

const MenuCard = ({
  menuItem,
  id,
}: {
  menuItem: MenuItemPropsInterface;
  id: number;
}) => {
  const dispatch = useDispatch();

  return (
    <StyledCard
      variant="outlined"
      onClick={() => {
        dispatch(updateCurrentMenuId({ menuId: id }));
        dispatch(updateIsAddToCartOpen({ isOpen: true }));
      }}
    >
      <StyledHeader title={menuItem.foodName} />
      <StyledDivider />
      <StyledContent>
        <Typography>{menuItem.description}</Typography>
      </StyledContent>
    </StyledCard>
  );
};

export default MenuCard;
