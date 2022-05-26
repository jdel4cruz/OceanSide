import {
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { useFormContext, Controller } from "react-hook-form";

//Helper Functions
import { priceToString } from "../../../../HelperFunctions";

const TipButtonGroup = ({ name }: { name: string }) => {
  const { control, watch, setValue, getValues } = useFormContext();
  const { tax, total } = useSelector((state: RootState) => state.cart);
  console.log(watch(name));

  return (
    <Stack direction="row">
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <ToggleButtonGroup
            {...field}
            exclusive
            onChange={(e, value) => {
              console.log("this is changing");
              field.onChange(value);
              setValue("total", total * (1 + tax) + getValues("tips"));
            }}
          >
            <ToggleButton value={Math.round(total * 0.05)}>
              <Stack>
                <Typography>{`5%`}</Typography>
                <Typography>
                  {priceToString(Math.round(0.05 * total))}
                </Typography>
              </Stack>
            </ToggleButton>
            <ToggleButton value={Math.round(total * 0.1)}>
              <Stack>
                <Typography>{`10%`}</Typography>
                <Typography>
                  {priceToString(Math.round(0.1 * total))}
                </Typography>
              </Stack>
            </ToggleButton>
            <ToggleButton value={Math.round(total * 0.15)}>
              <Stack>
                <Typography>{`15%`}</Typography>
                <Typography>
                  {priceToString(Math.round(0.15 * total))}
                </Typography>
              </Stack>
            </ToggleButton>
          </ToggleButtonGroup>
        )}
      />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder="0.00"
            label="Custom Amount"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            inputProps={{
              min: "0",
              max: "10000",
              step: "0.01",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default TipButtonGroup;
