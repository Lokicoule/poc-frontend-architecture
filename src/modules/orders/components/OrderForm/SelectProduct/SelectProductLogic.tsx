import { ERROR_INDEX } from "../../../../../constants/globals";
import { OrderProductViewModel } from "../../../../../viewModels/orders/OrderProductViewModel";
import { SelectProductView, SelectProductViewProps } from "./SelectProductView";

export type SelectProductLogicProps = SelectProductViewProps;

export const SelectProductLogic = ({
  error,
  helperText,
  products,
  control,
  name,
  defaultValue,
}: SelectProductLogicProps) => {
  const merge = (
    defaultProduct: OrderProductViewModel | undefined,
    customers: OrderProductViewModel[]
  ) =>
    defaultProduct &&
    customers.findIndex((customer) => customer.id === defaultProduct.id) ===
      ERROR_INDEX
      ? [defaultProduct, ...customers]
      : customers;

  return (
    <SelectProductView
      products={merge(defaultValue, products)}
      control={control}
      defaultValue={defaultValue}
      error={error}
      helperText={helperText}
      name={name}
    ></SelectProductView>
  );
};
