import { useState } from "react";
import { useNavigate } from "react-router";
import { CardMedia, Typography, Stack } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import { useDispatch } from "react-redux";
import { newCartItem } from "../../Redux/Reducers/cartReducer";

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
  StyledButton,
  Price,
} from "./MenuImgCard.styles";

//Helper Functions
import { priceToString, totalPrice } from "../../HelperFunctions";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

interface InitialOptions {
  [index: string]: boolean;
}

const initialOptions: InitialOptions = {};

const MenuImgCard = ({ menuItem }: { menuItem: MenuItemPropsInterface }) => {
  const [qty, setQty] = useState(1);
  const [extraOptions, setExtraOptions] = useState(initialOptions);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const price = totalPrice(extraOptions, menuItem, qty);

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
          <Price variant="h6">{`Price: ${priceToString(price)}`}</Price>
          <StyledButton
            size="large"
            endIcon={<ShoppingBagIcon />}
            disableElevation
            onClick={() => {
              dispatch(newCartItem({ qty, price, extraOptions, menuItem }));
              navigate(`/`);
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
