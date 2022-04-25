import { MenuItem } from "@mui/material";
import { Control } from "react-hook-form";
import { FormInputSelect } from "../../../../../components/Form/FormInput";
import { CustomerViewModel } from "../../../../../viewModels/customers";
import { FormOrderViewModel } from "../../../../../viewModels/orders";

export type SelectCustomerViewProps = {
  error: boolean;
  helperText: string | undefined;
  customers: CustomerViewModel[];
  control: Control<FormOrderViewModel, any>;
  defaultValue?: CustomerViewModel;
  name: string;
};

export const SelectCustomerView = ({
  error,
  helperText,
  customers,
  control,
  name,
  defaultValue,
}: SelectCustomerViewProps) => {
  const createKey = (id: string) => `create_order_select_customer_${id}`;

  return (
    <FormInputSelect
      defaultValue={defaultValue?.id}
      label="Client"
      name={name}
      control={control}
      error={error}
      helperText={helperText}
    >
      {customers?.map((item) => (
        <MenuItem key={createKey(item.id)} value={item.id}>
          {item.code} {item.naming && ` - ${item.naming}`}
        </MenuItem>
      ))}
    </FormInputSelect>
  );
};
