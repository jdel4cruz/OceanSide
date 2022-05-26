import { ToggleButton, Stack, Typography } from "@mui/material";
import { priceToString } from "../../../../HelperFunctions";

const TipButton = ({
  tipPercent,
  tax,
  cartTotal,
}: {
  tipPercent: number;
  tax: number;
  cartTotal: number;
}) => {
  const totalValue = Math.round(cartTotal * (1 + tipPercent + tax));
  return (
    <ToggleButton value={totalValue}>
      <Stack>
        <Typography>{`${tipPercent * 100}%`}</Typography>
        <Typography>
          {priceToString(Math.round(tipPercent * cartTotal))}
        </Typography>
      </Stack>
    </ToggleButton>
  );
};

export default TipButton;
