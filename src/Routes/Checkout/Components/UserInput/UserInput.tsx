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
          id={props.id}
          placeholder={props.placeholder}
          sx={props.sx}
          error={!!errors[props.type]}
          helperText={errors[props.type] ? errors[props.type]?.message : ""}
        />
      )}
    />
  );
};

export default UserInput;
