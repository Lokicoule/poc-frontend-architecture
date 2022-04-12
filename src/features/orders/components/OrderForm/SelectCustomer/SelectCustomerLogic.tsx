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
  defaultValue = "",
}: SelectCustomerLogicProps) => {
  return (
    <SelectCustomerView
      customers={customers}
      control={control}
      defaultValue={defaultValue}
      error={error}
      helperText={helperText}
      name={name}
    ></SelectCustomerView>
  );
};
