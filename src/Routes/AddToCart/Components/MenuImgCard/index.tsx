import { useState } from "react";
import { useNavigate } from "react-router";
import { CardMedia, Typography, Stack, IconButton } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useSelector, useDispatch } from "react-redux";
import {
  updateIsAddToCartOpen,
  newCartItem,
} from "../../../../Redux/Reducers/cartReducer";

import FoodOptions from "../FoodOptions";

//Components
import AdjustQtyInput from "../AdjustQtyInput";

//Styles
import {
  StyledCard,
  StyledDivider,
  StyledHeader,
  StyledContent,
  StyledButton,
  Price,
} from "./MenuImgCard.styles";

//Helper Functions
import { priceToString, totalPrice } from "../../../../HelperFunctions";

//Interfaces
import { MenuItemPropsInterface } from "../../../../interfaces";

interface InitialOptions {
  [index: string]: boolean;
}

const initialOptions: InitialOptions = {};

const MenuImgCard = ({ menuItem }: { menuItem: MenuItemPropsInterface }) => {
  const [qty, setQty] = useState(1);
  const [extraOptions, setExtraOptions] = useState(initialOptions);

  const dispatch = useDispatch();

  const price = totalPrice(extraOptions, menuItem, qty);

  return (
    <StyledCard variant="outlined">
      <Stack
        sx={{ width: 1 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5">Add To Cart:</Typography>
        <IconButton
          size="large"
          onClick={() => dispatch(updateIsAddToCartOpen({ isOpen: false }))}
        >
          <HomeRoundedIcon />
        </IconButton>
      </Stack>
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
          <Stack direction="row" alignItems="center" spacing={8}>
            <Price variant="h6">{`Price: $${priceToString(price)}`}</Price>
            <AdjustQtyInput qty={qty} setQty={setQty} />
          </Stack>

          <StyledButton
            size="large"
            endIcon={<ShoppingBagIcon />}
            disableElevation
            onClick={() => {
              dispatch(newCartItem({ qty, price, extraOptions, menuItem }));
              dispatch(updateIsAddToCartOpen({ isOpen: false }));
            }}
          >
            Add to cart
          </StyledButton>
        </Stack>
      </StyledContent>
    </StyledCard>
  );
};

export default MenuImgCard;
