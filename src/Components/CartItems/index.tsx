import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

//Components
import CartItem from "../CartItem";

//Styles
import { Wrapper, CartStack } from "./CartItems.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

const CartItems = () => {
  /*Will map out cartItems based on current Cart state in redux store. 
    Each item will be passed foodType and foodId  
  */
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <Wrapper>
      <CartStack spacing={-1}>
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
