import { CardMedia, Typography, Stack } from "@mui/material";
import { useState } from "react";

import FoodOptions from "../../Components/FoodOptions";

//Components
import AdjustQtyInput from "../AdjustQtyInput";
import AddToCartButton from "../AddToCartButton";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  StyledContent,
  Price,
} from "./MenuImgCard.styles";

//Helper Functions
import { priceToString } from "../../HelperFunctions";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

interface InitialOptions {
  [index: string]: boolean;
}

const initialOptions: InitialOptions = {};

const MenuImgCard = ({ menuItem }: { menuItem: MenuItemPropsInterface }) => {
  const [qty, setQty] = useState(1);
  const [extraOptions, setExtraOptions] = useState(initialOptions);

  const totalPrice = () => {
    const activeOptions = Object.keys(extraOptions);
    const menuOptions = menuItem.foodOptions;
    const addOptions = menuOptions?.addOptions;
    const removeOptions = menuOptions?.removeOptions;

    let totalPrice = menuItem.price;

    activeOptions.forEach((option) => {
      if (addOptions !== undefined) {
        const addOption = addOptions.find(
          (element) => element.optionName === option
        );
        if (addOption !== undefined) {
          totalPrice += addOption.price;
        }
      }

      if (removeOptions !== undefined) {
        const removeOption = removeOptions.find(
          (element) => element.optionName === option
        );
        if (removeOption !== undefined) {
          totalPrice += removeOption.price;
        }
      }
    });

    return priceToString(totalPrice * qty);
  };

  const price = totalPrice();

  console.log(extraOptions);
  console.log(qty);

  return (
    <StyledCard variant="outlined">
      <CardMedia component="img" image={menuItem.imgPath} />
      <StyledHeader title={menuItem.foodName} />
      <StyledDivider />
      <StyledContent>
        <Typography>{menuItem.description}</Typography>
      </StyledContent>

      {menuItem.foodOptions?.addOptions !== undefined && (
        <>
          <StyledDivider />
          <StyledHeader title="Add Options" />
          <StyledDivider />
          <StyledContent>
            <FoodOptions
              options={menuItem.foodOptions.addOptions}
              setOptions={setExtraOptions}
            />
          </StyledContent>
        </>
      )}

      {menuItem.foodOptions?.removeOptions !== undefined && (
        <>
          <StyledDivider />
          <StyledHeader title="Remove Options" />
          <StyledDivider />
          <StyledContent>
            <FoodOptions
              options={menuItem.foodOptions.removeOptions}
              setOptions={setExtraOptions}
            />
          </StyledContent>
        </>
      )}

      <StyledDivider />
      <StyledContent>
        <Stack alignItems="center" spacing={2}>
          <AdjustQtyInput qty={qty} setQty={setQty} />
          <Price variant="h6">{`Price: $${price}`}</Price>
          <AddToCartButton />
        </Stack>
      </StyledContent>
    </StyledCard>
  );
};

export default MenuImgCard;
