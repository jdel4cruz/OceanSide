import {
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { useFormContext, Controller } from "react-hook-form";

//Components
import TipButton from "../TipButton";

const TipButtonGroup = ({ name }: { name: string }) => {
  const { control, watch } = useFormContext();
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
            }}
          >
            <ToggleButton value="test1">test1</ToggleButton>
            <ToggleButton value="test2">test2</ToggleButton>
            <TipButton tipPercent={0.05} tax={tax} cartTotal={total} />
            <TipButton tipPercent={0.1} tax={tax} cartTotal={total} />
            <TipButton tipPercent={0.15} tax={tax} cartTotal={total} />
          </ToggleButtonGroup>
        )}
      />
      {/* <Controller
      name={props.name}
      control={control}
      render={({field}) => (
          <TextField
          {...field}
          onChange={(e)=> field.onChange()}
          />
      )

      }
      /> */}
    </Stack>
  );
};

export default TipButtonGroup;
