import { Container, Stack, IconButton, Typography } from "@mui/material";
import { AppDispatch } from "../../Redux/store";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

type SetQtyType = React.Dispatch<React.SetStateAction<number>>;

const AdjustQtyInput = ({
  qty,
  setQty,
}: {
  qty: number;
  setQty: SetQtyType;
}) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography variant="h6">Qty:</Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton
          onClick={() => setQty((prevQty) => (qty > 1 ? prevQty - 1 : prevQty))}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{qty}</Typography>
        <IconButton onClick={() => setQty((prevQty) => prevQty + 1)}>
          <AddIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AdjustQtyInput;
