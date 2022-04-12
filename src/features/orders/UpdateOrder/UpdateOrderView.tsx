import { OrderForm, OrderFormProps } from "../components/OrderForm";

export type UpdateOrderViewProps = Required<OrderFormProps>;

export const UpdateOrderView = ({
  form,
  onSubmit,
  errors,
  defaultCustomer,
}: UpdateOrderViewProps) => {
  return (
    <OrderForm
      defaultCustomer={defaultCustomer}
      form={form}
      errors={errors}
      onSubmit={onSubmit}
    ></OrderForm>
  );
};
