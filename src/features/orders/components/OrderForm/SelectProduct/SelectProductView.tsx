import { MenuItem } from "@mui/material";
import { Control } from "react-hook-form";
import { FormInputSelect } from "../../../../../components/Form/FormInputs";
import { FormOrderViewModel } from "../../../../../viewModels/orders";
import { OrderProductViewModel } from "../../../../../viewModels/orders/OrderProductViewModel";
import { ProductViewModel } from "../../../../../viewModels/products";

export type SelectProductViewProps = {
  error: boolean | undefined;
  helperText: string | undefined;
  products: ProductViewModel[];
  control: Control<FormOrderViewModel, any>;
  defaultValue?: OrderProductViewModel;
  name: string;
};

export const SelectProductView = ({
  error,
  helperText,
  products,
  name,
  control,
  defaultValue,
}: SelectProductViewProps) => {
  const createKey = (id: string) => `create_order_select_product_${id}`;
  return (
    <FormInputSelect
      defaultValue={defaultValue?.id}
      label="Produit"
      name={name}
      control={control}
      error={error}
      helperText={helperText}
    >
      {products?.map((item) => (
        <MenuItem key={createKey(item.id)} value={item.id}>
          {item.code}
        </MenuItem>
      ))}
    </FormInputSelect>
  );
};
