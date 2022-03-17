import { SelectProductView, SelectProductViewProps } from "./SelectProductView";

export type SelectProductLogicProps = SelectProductViewProps;

export const SelectProductLogic = ({
  error,
  helperText,
  products,
  control,
  name,
  defaultValue = "",
}: SelectProductLogicProps) => {
  return (
    <SelectProductView
      products={products}
      control={control}
      defaultValue={defaultValue}
      error={error}
      helperText={helperText}
      name={name}
    ></SelectProductView>
  );
};
