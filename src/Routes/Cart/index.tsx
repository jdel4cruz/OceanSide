import { Stack } from "@mui/material";

//Components
import ReturnButton from "../../Components/ReturnButton";
import CartItems from "./Components/CartItems";

//Styles
import { Wrapper, Header } from "./Cart.styles";

const Cart = () => {
  return (
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
  );
};

export default Cart;
