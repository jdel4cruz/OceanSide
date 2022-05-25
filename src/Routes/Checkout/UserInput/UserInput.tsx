import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const UserInput = (props: {
  name: string;
  defaultValue: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  type: string;
  label: string;
  id: string;
  placeholder: string;
  sx: { width: number };
  required: boolean;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue={props.defaultValue}
      rules={{ required: props.required }}
      render={({ field }) => (
        <TextField
          {...field}
          variant={props.variant}
          type={props.type}
          label={props.label}
          error={!!errors[props.type]}
          helperText={errors.email ? errors.email?.message : ""}
          id={props.id}
          sx={props.sx}
          placeholder={props.placeholder}
        />
      )}
    />
  );
};

export default UserInput;
