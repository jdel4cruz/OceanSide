import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { useNavigate } from "react-router";

//Components
import CartItem from "../CartItem";
import CartSummary from "../CartSummary";

//Styles
import {
  Wrapper,
  CartStack,
  NoCartItems,
  StyledButton,
} from "./CartItems.styles";

const CartItems = () => {
  /*Will map out cartItems based on current Cart state in redux store. 
    Each item will be passed foodType and foodId  
  */
  const { cart, tax } = useSelector((state: RootState) => state.cart);

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <NoCartItems alignItems="center" justifyContent="center">
        Add items to cart and they will appear here.
        <StyledButton
          size="large"
          disableElevation
          onClick={() => {
            navigate(`/`);
          }}
        >
          Return to menu
        </StyledButton>
      </NoCartItems>
    );
  }

  return (
    <Wrapper>
      <CartStack spacing={2}>
        {cart.map((cartItem, i) => (
          <CartItem
            menuItem={cartItem.menuItem}
            qty={cartItem.qty}
            price={cartItem.price}
            cartId={cartItem.cartId}
            key={i}
          />
        ))}
        <CartSummary cart={cart} tax={tax} />
      </CartStack>
    </Wrapper>
  );
};

export default CartItems;
