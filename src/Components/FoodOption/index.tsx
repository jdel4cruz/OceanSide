import { Checkbox, Stack, Typography } from "@mui/material";

//Interfaces
import { foodOptionInterface } from "../../interfaces";

const FoodOption = ({ option }: { option: foodOptionInterface }) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>{option.optionName}</Typography>
        <Typography>${option.price}</Typography>
      </Stack>

      <Checkbox />
    </Stack>
  );
};

export default FoodOption;
