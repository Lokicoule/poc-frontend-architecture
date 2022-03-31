import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CreateOrderMutation } from "../../../api/fdo/operations/orders.generated";
import { FormOrderViewModel } from "../../../viewModels/orders";
import { CreateOrderView, CreateOrderViewProps } from "./CreateOrderView";

type CreateOrderLogicProps = Pick<CreateOrderViewProps, "errors"> & {
  defaultValues: FormOrderViewModel;
  onSubmit: (
    data: FormOrderViewModel
  ) => Promise<
    FetchResult<CreateOrderMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
  customer: yup.string().required("Veuillez sélectionner un client."),
  items: yup.array().of(
    yup.object().shape({
      product: yup.string().required("Un produit doit être sélectionné."),
      amount: yup.number().required("Le nombre de colis est requis."),
      unitPrice: yup.number().required("Le prix par colis est requis."),
    })
  ),
});

export const CreateOrderLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: CreateOrderLogicProps) => {
  const form = useForm<FormOrderViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: FormOrderViewModel) => {
    await onSubmit(data);
  };

  return (
    <CreateOrderView
      form={form}
      onSubmit={handleSubmit}
      errors={errors}
    ></CreateOrderView>
  );
};
