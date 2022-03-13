import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEqual } from "lodash";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UpdateOrderMutation } from "../../../api/hooks/orders.generated";
import { UpdateOrderViewModel } from "../../../view-models/orders";
import { UpdateOrderView, UpdateOrderViewProps } from "./UpdateOrderView";

type UpdateOrderLogicProps = Pick<UpdateOrderViewProps, "errors"> & {
  defaultValues: UpdateOrderViewModel;
  onSubmit: (
    data: UpdateOrderViewModel
  ) => Promise<
    FetchResult<UpdateOrderMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
  code: yup
    .string()
    .required("Le code commande est requis.")
    .min(5, "Le code commande doit contenir au moins 5 caractères."),
});

export const UpdateOrderLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateOrderLogicProps) => {
  const form = useForm<UpdateOrderViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: UpdateOrderViewModel) => {
    if (!isEqual(defaultValues, data)) await onSubmit(data);
  };

  const handleReset = () => form.reset();

  return (
    <UpdateOrderView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></UpdateOrderView>
  );
};
