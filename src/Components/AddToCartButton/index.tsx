import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

//Styles
import { StyledButton } from "./AddToCartButton.styles";

const AddToCartButton = () => {
  return (
    <StyledButton size="large" endIcon={<ShoppingBagIcon />} disableElevation>
      Add to cart
    </StyledButton>
  );
};

export default AddToCartButton;
