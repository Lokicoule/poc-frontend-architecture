import TextField, { TextFieldProps } from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker, DatePickerProps } from "@mui/lab";
import { fr, enUS } from "date-fns/locale";
import { Control, Controller } from "react-hook-form";

const localeMap = {
  en: enUS,
  fr: fr,
};

type Props = TextFieldProps & {
  control: Control<any, any>;
  name: string;
};

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
