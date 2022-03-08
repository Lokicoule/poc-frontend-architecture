import { TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  control: Control<FieldValues, any>;
  sx: {
    sx: any;
  };
}

export const FormInputMonetaryText = ({ name, label, control, sx }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={{ sx }}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};
