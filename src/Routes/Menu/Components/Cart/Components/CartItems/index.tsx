import { useSelector } from "react-redux";
import { RootState } from "../../../../../../Redux/store";
import { useDispatch } from "react-redux";
import { updateIsCartOpen } from "../../../../../../Redux/Reducers/cartReducer";
//Components
import CartItem from "../CartItem";

//Styles
import {
  Wrapper,
  CartStack,
  NoCartItems,
  StyledButton,
} from "./CartItems.styles";
import { Typography } from "@mui/material";

const CartItems = () => {
  /*Will map out cartItems based on current Cart state in redux store. 
    Each item will be passed foodType and foodId  
  */
  const { cart, tax, total } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <NoCartItems alignItems="center" justifyContent="center">
        <Typography variant="h5" sx={{ color: "#0000009e" }}>
          Your cart is empty!
        </Typography>
        <StyledButton
          size="large"
          disableElevation
          variant="contained"
          onClick={() => {
            dispatch(updateIsCartOpen({ isOpen: false }));
          }}
        >
          Return to menu
        </StyledButton>
      </NoCartItems>
    );
  }

  return (
    <Wrapper>
      <CartStack spacing={1}>
        {cart.map((cartItem, i) => (
          <CartItem
            menuItem={cartItem.menuItem}
            qty={cartItem.qty}
            price={cartItem.price}
            cartId={cartItem.cartId}
            key={i}
          />
        ))}
      </CartStack>
    </Wrapper>
  );
};

export default CartItems;
