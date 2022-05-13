import { CardMedia, Typography } from "@mui/material";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  StyledContent,
} from "./MenuImgCard.styles";

//Interfaces
import { MenuItemProps } from "../../interfaces";

const MenuImgCard = ({ menuItem }: { menuItem: MenuItemProps }) => {
  return (
    <StyledCard variant="outlined">
      <CardMedia component="img" image={menuItem.imgPath} />
      <StyledHeader title={menuItem.foodName} />
      <StyledDivider />
      <StyledContent>
        <Typography>{menuItem.description}</Typography>
      </StyledContent>
    </StyledCard>
  );
};

export default MenuImgCard;
