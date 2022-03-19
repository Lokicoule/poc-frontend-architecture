import { MenuItem } from "@mui/material";
import { Control } from "react-hook-form";
import { FormInputSelect } from "../../../../../../components/Form/FormInputs/FormInputSelect";

export type SelectParamKeyProps = {
  error: boolean | undefined;
  helperText: string | undefined;
  control: Control<any, any>;
  defaultValue: string;
  name: string;
  values: string[];
};

export const SelectParamKey = ({
  error,
  helperText,
  name,
  control,
  values,
  defaultValue = "",
}: SelectParamKeyProps) => {
  const createKey = (id: number) => `select_param_key_${id}`;

  return (
    <FormInputSelect
      defaultValue={defaultValue}
      label="Paramètre type"
      name={name}
      control={control}
      error={error}
      helperText={helperText}
    >
      {values?.map((item, idx) => (
        <MenuItem key={createKey(idx)} value={item}>
          {item}
        </MenuItem>
      ))}
    </FormInputSelect>
  );
};
