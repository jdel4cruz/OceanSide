import {
  Card,
  CardContent,
  CardActions,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

//Styles
import { StyledButton, StyledDivider } from "./CartSummary.styles";

//Helper Functions
import { priceToString } from "../../../../HelperFunctions";

const CartSummary = ({ tax, total }: { tax: number; total: number }) => {
  const navigate = useNavigate();

  if (total === 0) {
    return <></>;
  }
  return (
    <Card
      sx={{
        width: "calc(100% - 1rem)",
        overflow: "visible",
        alignSelf: "start",
      }}
    >
      <CardContent sx={{ color: "#0000009e" }}>
        <Stack>
          <Stack direction="row" justifyContent="space-between" spacing={1}>
            <Typography sx={{ fontWeight: "bold" }}>Item Total</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {`$${priceToString(total)}`}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontWeight: "bold" }}>Tax</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {`$${priceToString(Math.round(total * tax))}`}
            </Typography>
          </Stack>
          <StyledDivider />
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontWeight: "bold" }}>Total:</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {`$${priceToString(Math.round(total + total * tax))}`}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", pb: "1rem" }}
      >
        <StyledButton
          size="large"
          disableElevation
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default CartSummary;
