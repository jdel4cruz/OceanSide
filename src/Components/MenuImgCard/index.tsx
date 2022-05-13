import { CardMedia, Typography } from "@mui/material";

import FoodOptions from "../../Components/FoodOptions";

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
      <StyledDivider />
      <StyledContent>
        <Typography>Add Options</Typography>
        <StyledDivider />
        {menuItem.foodOptions?.addOptions !== undefined && (
          <FoodOptions options={menuItem.foodOptions.addOptions} />
        )}
      </StyledContent>
      <StyledDivider />
      <StyledContent>
        <Typography>Remove Options</Typography>
        <StyledDivider />
        {menuItem.foodOptions?.removeOptions !== undefined && (
          <FoodOptions options={menuItem.foodOptions.removeOptions} />
        )}
      </StyledContent>
    </StyledCard>
  );
};

export default MenuImgCard;
