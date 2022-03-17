import { GraphQLErrors } from "@apollo/client/errors";
import { UseFormReturn } from "react-hook-form";
import { FormOrderViewModel } from "../../../view-models/orders";
import { OrderForm } from "../components/OrderForm";

export type UpdateOrderViewProps = {
  form: UseFormReturn<FormOrderViewModel>;
  errors: GraphQLErrors | undefined;
  onSubmit: (data: FormOrderViewModel) => Promise<void>;
};

export const UpdateOrderView = ({
  form,
  onSubmit,
  errors,
}: UpdateOrderViewProps) => {
  return (
    <OrderForm form={form} errors={errors} onSubmit={onSubmit}></OrderForm>
  );
};
