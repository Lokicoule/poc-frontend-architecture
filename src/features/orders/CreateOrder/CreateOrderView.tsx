import { GraphQLErrors } from "@apollo/client/errors";
import { UseFormReturn } from "react-hook-form";
import { FormOrderViewModel } from "../../../view-models/orders";
import { OrderForm } from "../components/OrderForm";

export type CreateOrderViewProps = {
  form: UseFormReturn<FormOrderViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: FormOrderViewModel) => Promise<void>;
};

export const CreateOrderView = ({
  form,
  onSubmit,
  errors,
}: CreateOrderViewProps) => {
  return (
    <OrderForm form={form} errors={errors} onSubmit={onSubmit}></OrderForm>
  );
};
