import { Stack, IconButton, Typography } from "@mui/material";

import {
  addCartItem,
  removeCartItem,
} from "../../../../Redux/Reducers/cartReducer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch } from "react-redux";

const AdjustCartQty = ({ cartId, qty }: { cartId: number; qty: number }) => {
  const dispatch = useDispatch();
  return (
    <Stack direction="row" alignItems="center" spacing={0}>
      <Stack direction="row" alignItems="center" spacing={0}>
        <IconButton
          size="small"
          onClick={() => qty > 1 && dispatch(removeCartItem({ cartId }))}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{qty}</Typography>
        <IconButton
          size="small"
          onClick={() => dispatch(addCartItem({ cartId }))}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AdjustCartQty;
