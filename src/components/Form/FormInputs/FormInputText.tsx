import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type Props = TextFieldProps & {
  control: Control<any, any>;
  name: string;
};

export const FormInputText = ({ name, control, ...textFieldProps }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField {...textFieldProps} onChange={onChange} value={value} />
      )}
    />
  );
};
