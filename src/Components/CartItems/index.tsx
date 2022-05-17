import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

//Components
import ReturnButton from "../ReturnButton";
import CartItem from "../CartItem";

//Styles
import { Wrapper, CartStack } from "./CartItems.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

const CartItems = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  //Will map out cartItems based on current Cart state in redux store. Each item will be passed foodType and foodId

  return (
    <Wrapper>
      <ReturnButton path="/"></ReturnButton>
      <CartStack>
        {cart.map((cartItem) => (
          <CartItem menuItem={cartItem.menuItem} qty={cartItem.qty} />
        ))}
      </CartStack>
    </Wrapper>
  );
};

export default CartItems;
