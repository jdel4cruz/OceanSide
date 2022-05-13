import { Stack, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const AdjustQtyInput = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography variant="h5">Qty:</Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton>
          <RemoveIcon />
        </IconButton>
        <Typography variant="h5">2</Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AdjustQtyInput;