import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { InputProps } from "../../interfaces";

const UserInput = (props: InputProps) => {
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
          multiline={props.multiline || false}
          rows={props.rows || ""}
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
