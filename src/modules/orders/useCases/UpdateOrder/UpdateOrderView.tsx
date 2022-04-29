import { OrderForm, OrderFormProps } from "../../components/OrderForm";

export type UpdateOrderViewProps = Required<OrderFormProps>;

export const UpdateOrderView = ({
  form,
  onSubmit,
  errors,
  defaultCustomer,
  defaultProducts,
}: UpdateOrderViewProps) => {
  return (
    <OrderForm
      defaultCustomer={defaultCustomer}
      defaultProducts={defaultProducts}
      form={form}
      errors={errors}
      onSubmit={onSubmit}
    ></OrderForm>
  );
};
