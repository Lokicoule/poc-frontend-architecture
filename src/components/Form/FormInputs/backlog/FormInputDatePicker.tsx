import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../FormInputProps";

interface Props extends Omit<FormInputProps, "options" | "setValue"> {}

export const FormInputDatePicker = ({ name, label, control, sx }: Props) => {
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
