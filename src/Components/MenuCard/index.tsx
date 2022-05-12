import { Typography } from "@mui/material";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  StyledContent,
} from "./MenuCard.styles";

//Interfaces
import { MenuItemProps } from "../../interfaces";

const MenuCard = ({ menuItem }: { menuItem: MenuItemProps }) => {
  return (
    <StyledCard variant="outlined">
      <StyledHeader title={menuItem.foodName} />
      <StyledDivider />
      <StyledContent>
        <Typography>{menuItem.description}</Typography>
      </StyledContent>
    </StyledCard>
  );
};

export default MenuCard;
