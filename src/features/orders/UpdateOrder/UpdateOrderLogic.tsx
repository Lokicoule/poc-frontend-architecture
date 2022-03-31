import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UpdateOrderMutation } from "../../../api/fdo/orders.generated";
import { FormOrderViewModel } from "../../../types/orders";
import { UpdateOrderView, UpdateOrderViewProps } from "./UpdateOrderView";

type UpdateOrderLogicProps = Pick<UpdateOrderViewProps, "errors"> & {
  defaultValues: FormOrderViewModel;
  onSubmit: (
    data: FormOrderViewModel
  ) => Promise<
    FetchResult<UpdateOrderMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
  code: yup.string().required("Le code de la commande est obligatoire."),
  customer: yup.string().required("Veuillez sélectionner un client."),
  items: yup.array().of(
    yup.object().shape({
      product: yup.string().required("Un produit doit être sélectionné."),
      amount: yup.number().required("Le nombre de colis est requis."),
      unitPrice: yup.number().required("Le prix par colis est requis."),
    })
  ),
});

export const UpdateOrderLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateOrderLogicProps) => {
  const form = useForm<FormOrderViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: FormOrderViewModel) => {
    await onSubmit(data);
  };

  return (
    <UpdateOrderView
      form={form}
      onSubmit={handleSubmit}
      errors={errors}
    ></UpdateOrderView>
  );
};
