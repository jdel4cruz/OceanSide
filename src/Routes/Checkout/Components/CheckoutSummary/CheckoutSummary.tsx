import {

  Stack,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router";

//Styles
import { StyledButton } from "./CheckoutSummary.styles";

//Helper Functions
import { priceToString } from "../../../../HelperFunctions";

const handleTips = (tips: number) => {
  const tipsString = priceToString(tips);

  return tipsString === "Free" ? "0.00" : tipsString;
};

const CartSummary = ({
  tax,
  total,
  tips,
}: {
  tax: number;
  total: number;
  tips: number;
}) => {
  const navigate = useNavigate();

  console.log(tax);

  return (
    <Container sx={{ p: "0.25rem" }}>
      <Paper sx={{ p: "1rem" }}>
        <Stack>
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <Typography sx={{ fontWeight: "bold" }}>Item Total:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {`$${priceToString(total)}`}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontWeight: "bold" }}>Tax:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {`$${priceToString(Math.round(total * tax))}`}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontWeight: "bold" }}>Tips:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {`$${handleTips(tips)}`}
            </Typography>
          </Stack>
          <Stack
            sx={{ paddingTop: "1rem" }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography sx={{ fontWeight: "bold" }}>Total:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {`$${priceToString(Math.round(total + total * tax) + tips)}`}
            </Typography>
          </Stack>
        </Stack>

        <StyledButton
          size="large"
          disableElevation
          type="submit"
          onClick={() => null}
        >
          Proceed to Payment Method
        </StyledButton>
      </Paper>
    </Container>
  );
};

export default CartSummary;
