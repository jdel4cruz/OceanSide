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
      <StyledHeader title="Add Options" />
      <StyledDivider />
      <StyledContent>
        {menuItem.foodOptions?.addOptions !== undefined && (
          <FoodOptions options={menuItem.foodOptions.addOptions} />
        )}
      </StyledContent>
      <StyledDivider />
      <StyledHeader title="Remove Options" />
      <StyledDivider />
      <StyledContent>
        {menuItem.foodOptions?.removeOptions !== undefined && (
          <FoodOptions options={menuItem.foodOptions.removeOptions} />
        )}
      </StyledContent>
    </StyledCard>
  );
};

export default MenuImgCard;
