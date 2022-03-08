import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

interface Props
  extends Required<Omit<FormInputProps, "setValue" | "sx">>,
    Partial<Pick<FormInputProps, "sx">> {}

export const FormInputDropdown = ({ name, control, label, options }: Props) => {
  const generateSingleOptions = () => {
    return options.map((option) => (
      <MenuItem key={option.key} value={option.value}>
        {option.value}
      </MenuItem>
    ));
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
