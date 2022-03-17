import { MenuItem } from "@mui/material";
import { Control } from "react-hook-form";
import { FormInputSelect } from "../../../../../components/Form/FormInputs/FormInputSelect";
import { CustomerViewModel } from "../../../../../view-models/customers";
import { FormOrderViewModel } from "../../../../../view-models/orders";

export type SelectCustomerViewProps = {
  error: boolean;
  helperText: string | undefined;
  customers: CustomerViewModel[];
  control: Control<FormOrderViewModel, any>;
  defaultValue: string;
};

export const SelectCustomerView = ({
  error,
  helperText,
  customers,
  control,
  defaultValue = "",
}: SelectCustomerViewProps) => {
  const createKey = (id: string) => `create_order_select_customer_${id}`;

  return (
    <FormInputSelect
      defaultValue={defaultValue}
      label="Client"
      name="customer"
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
