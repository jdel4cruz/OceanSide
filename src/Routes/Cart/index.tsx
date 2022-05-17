import { useParams } from "react-router";

//Components
import ReturnButton from "../../Components/ReturnButton";
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
      <Header variant="h5">My Cart:</Header>
    </Wrapper>
  );
};

export default Cart;
