import { MenuItem } from "@mui/material";
import { Control } from "react-hook-form";
import { FormInputSelect } from "../../../../../components/Form/FormInputs/FormInputSelect";
import { CreateOrderViewModel } from "../../../../../view-models/orders";
import { ProductViewModel } from "../../../../../view-models/products";

export type SelectProductViewProps = {
  error: boolean;
  helperText: string | undefined;
  products: ProductViewModel[];
  control: Control<CreateOrderViewModel, any>;
  defaultValue: string;
  name: string;
};

export const SelectProductView = ({
  error,
  helperText,
  products,
  name,
  control,
  defaultValue = "",
}: SelectProductViewProps) => {
  const createKey = (id: string) => `create_order_select_product_${id}`;

  return (
    <FormInputSelect
      defaultValue={defaultValue}
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
