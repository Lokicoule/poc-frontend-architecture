import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UpdateOrderMutation } from "../../../api/fdo/operations/orders.generated";
import { FormOrderViewModel } from "../../../viewModels/orders";
import { UpdateOrderView, UpdateOrderViewProps } from "./UpdateOrderView";

type UpdateOrderLogicProps = Pick<
  UpdateOrderViewProps,
  "errors" | "defaultCustomer" | "defaultProducts"
> & {
  defaultValues: FormOrderViewModel;
  onSubmit: (
    data: FormOrderViewModel
  ) => Promise<
    FetchResult<UpdateOrderMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
  code: yup.string().required("Le code de la commande est obligatoire."),
  customerId: yup.string().required("Veuillez sélectionner un client."),
  items: yup.array().of(
    yup.object().shape({
      productId: yup.string().required("Un produit doit être sélectionné."),
      amount: yup.number().required("Le nombre de colis est requis."),
      unitPrice: yup.number().required("Le prix par colis est requis."),
    })
  ),
});

export const UpdateOrderLogic = ({
  defaultValues,
  onSubmit,
  errors,
  defaultCustomer,
  defaultProducts,
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
      defaultCustomer={defaultCustomer}
      defaultProducts={defaultProducts}
    ></UpdateOrderView>
  );
};
