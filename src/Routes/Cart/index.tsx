import { useParams } from "react-router";

//Components
import ReturnButton from "../../Components/ReturnButton";
import CartItems from "../../Components/CartItems";

//Styles
import { Wrapper, MenuContainer, Header } from "./Cart.styles";

//Interfaces
import { MenuItemPropsInterface } from "../../interfaces";

//Data
import { menuItems } from "../../MenuItems";

const Cart = () => {
  return (
    <Wrapper>
      <ReturnButton path="/" />
      <Header variant="h4">My Cart:</Header>
      <CartItems />
    </Wrapper>
  );
};

export default Cart;
