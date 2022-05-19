import { Card, CardContent, Stack, Typography } from "@mui/material";

//Interfaces
import { CartItemInterface } from "../../interfaces";

//Helper Functions
import { priceToString } from "../../HelperFunctions";

const CartSummary = ({
  cart,
  tax,
}: {
  cart: CartItemInterface[];
  tax: number;
}) => {
  const cartTotalPrice = () => {
    const total = cart.reduce((sum, current) => {
      return sum + current.price;
    }, 0);

    return total;
  };

  const total = cartTotalPrice();

  return (
    <Card>
      <CardContent>
        <Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Item Total</Typography>
            <Typography>{priceToString(total)}</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Tax</Typography>
            <Typography>{priceToString(Math.round(total * tax))}</Typography>
          </Stack>
          <Stack
            sx={{ paddingTop: "1rem" }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography>Total:</Typography>
            <Typography>
              {priceToString(Math.round(total + total * tax))}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
