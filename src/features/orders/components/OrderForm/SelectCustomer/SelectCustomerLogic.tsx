import { ERROR_INDEX } from "../../../../../constants/globals";
import { OrderCustomerViewModel } from "../../../../../viewModels/orders/OrderCustomerViewModel";
import {
  SelectCustomerView,
  SelectCustomerViewProps,
} from "./SelectCustomerView";

export type SelectCustomerLogicProps = SelectCustomerViewProps;

export const SelectCustomerLogic = ({
  error,
  helperText,
  customers,
  control,
  name,
  defaultValue,
}: SelectCustomerLogicProps) => {
  const merge = (
    defaultCustomer: OrderCustomerViewModel | undefined,
    customers: OrderCustomerViewModel[]
  ) =>
    defaultCustomer &&
    customers.findIndex((customer) => customer.id === defaultCustomer.id) ===
      ERROR_INDEX
      ? [defaultCustomer, ...customers]
      : customers;
  return (
    <SelectCustomerView
      customers={merge(defaultValue, customers)}
      control={control}
      defaultValue={defaultValue}
      error={error}
      helperText={helperText}
      name={name}
    ></SelectCustomerView>
  );
};
