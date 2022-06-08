import { Stack, Modal, Typography, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateIsCartOpen } from "../../Redux/Reducers/cartReducer";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

//Components
import CartItems from "./Components/CartItems";
import CartSummary from "./Components/CartSummary";

//Styles
import { Wrapper } from "./Cart.styles";

//Interfaces
import { RootState } from "../../Redux/store";

const Cart = () => {
  const { isCartOpen, tax, total } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <Modal
      open={isCartOpen}
      onClose={() => dispatch(updateIsCartOpen({ isOpen: false }))}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Wrapper disableGutters>
        <Stack
          sx={{ width: 1, mb: ".5rem" }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            My Cart
          </Typography>
          <IconButton
            sx={{
              pr: "0",
              mr: ".5rem",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            onClick={() => dispatch(updateIsCartOpen({ isOpen: false }))}
          >
            <HomeRoundedIcon sx={{ color: "white", fontSize: "3rem" }} />
          </IconButton>
        </Stack>
        <CartItems />
        <CartSummary total={total} tax={tax} />
      </Wrapper>
    </Modal>
  );
};

export default Cart;
