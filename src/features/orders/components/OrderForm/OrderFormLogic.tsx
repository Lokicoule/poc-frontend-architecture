import { UseFormReturn } from "react-hook-form";
import { FormOrderViewModel } from "../../../../types/orders";
import { OrderFormView, OrderFormViewProps } from "./OrderFormView";

export type OrderFormLogicProps = Pick<OrderFormViewProps, "errors"> & {
  form: UseFormReturn<FormOrderViewModel>;
  onSubmit: (data: FormOrderViewModel) => Promise<void>;
};

export const OrderFormLogic = ({
  form,
  onSubmit,
  errors,
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
    ></OrderFormView>
  );
};
