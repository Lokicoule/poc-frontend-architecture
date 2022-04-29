import { FormOrderViewModel } from "../../../../viewModels/orders";
import { OrderFormView, OrderFormViewProps } from "./OrderFormView";

export type OrderFormLogicProps = Omit<OrderFormViewProps, "onReset">;

export const OrderFormLogic = ({
  form,
  onSubmit,
  errors,
  defaultCustomer,
  defaultProducts,
}: OrderFormLogicProps) => {
  const handleReset = () => form.reset();

  const handleSubmit = async (data: FormOrderViewModel) => {
    await onSubmit(data);
  };

  return (
    <OrderFormView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
      defaultCustomer={defaultCustomer}
      defaultProducts={defaultProducts}
    ></OrderFormView>
  );
};
