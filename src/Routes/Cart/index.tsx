import { Stack, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateIsCartOpen } from "../../Redux/Reducers/cartReducer";

//Components
import ReturnButton from "../../Components/ReturnButton";
import CartItems from "./Components/CartItems";

//Styles
import { Wrapper, Header } from "./Cart.styles";

//Interfaces
import { RootState } from "../../Redux/store";

const Cart = () => {
  const { isCartOpen } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <Modal
      open={isCartOpen}
      onClose={() => dispatch(updateIsCartOpen({ isOpen: false }))}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Wrapper alignItems="center">
        <Stack
          sx={{ width: 1, mb: "1rem" }}
          direction="row"
          justifyContent="space-between"
          spacing={5}
        >
          <Header variant="h4">My Cart:</Header>
          <ReturnButton path="/" />
        </Stack>
        <CartItems />
      </Wrapper>
    </Modal>
  );
};

export default Cart;
