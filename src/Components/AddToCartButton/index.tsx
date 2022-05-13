import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

//Styles
import { StyledButton } from "./AddToCartButton.styles";

const AddToCartButton = () => {
  return (
    <StyledButton
      variant="contained"
      size="large"
      endIcon={<ShoppingBagIcon />}
      disableElevation
    >
      Add to cart
    </StyledButton>
  );
};

export default AddToCartButton;
