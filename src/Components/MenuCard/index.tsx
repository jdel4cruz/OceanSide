import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  StyledContent,
} from "./MenuCard.styles";

//Interfaces
import { MenuItemProps } from "../../interfaces";

const MenuCard = ({
  menuItem,
  id,
}: {
  menuItem: MenuItemProps;
  id: number;
}) => {
  const navigate = useNavigate();

  return (
    <StyledCard variant="outlined" onClick={() => navigate("")}>
      <StyledHeader title={menuItem.foodName} />
      <StyledDivider />
      <StyledContent>
        <Typography>{menuItem.description}</Typography>
      </StyledContent>
    </StyledCard>
  );
};

export default MenuCard;
