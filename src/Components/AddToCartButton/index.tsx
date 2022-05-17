import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useDispatch } from "react-redux";

//Styles
import { StyledButton } from "./AddToCartButton.styles";

const AddToCartButton = () => {
  const dispatch = useDispatch();

  return (
    <StyledButton size="large" endIcon={<ShoppingBagIcon />} disableElevation>
      Add to cart
    </StyledButton>
  );
};

export default AddToCartButton;
