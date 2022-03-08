import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

interface Props
  extends Required<Omit<FormInputProps, "options" | "setValue" | "sx">>,
    Partial<Pick<FormInputProps, "sx">> {}

export const FormInputPasswordText = ({ name, label, control, sx }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={{ ...sx }}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};
