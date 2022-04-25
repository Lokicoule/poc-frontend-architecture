import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { enUS, fr } from "date-fns/locale";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const localeMap = {
  en: enUS,
  fr: fr,
};

type Props = TextFieldProps & Pick<FormInputProps, "control" | "name">;

export const FormInputDatePicker = ({
  control,
  name,
  label,
  ...textFieldProps
}: Props) => (
  <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap["fr"]}>
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          label={label}
          onChange={onChange}
          value={value}
          renderInput={(params) => (
            <TextField {...textFieldProps} {...params} />
          )}
        />
      )}
    />
  </LocalizationProvider>
);
