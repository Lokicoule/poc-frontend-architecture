import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  OrderViewModel,
  UpdateOrderViewModelProps,
} from "../../domain/orders.model";
import { ordersNavigationHelper } from "../../helpers/orders-navigation.helper";
import { UpdateOrderMutation } from "../../operations/orders.generated";
import { UpdateOrderView, UpdateOrderViewProps } from "./UpdateOrderView";

type UpdateOrderLogicProps = Pick<UpdateOrderViewProps, "errors" | "list"> & {
  defaultValues: OrderViewModel;
  onSubmit: (
    data: UpdateOrderViewModelProps
  ) => Promise<
    FetchResult<UpdateOrderMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
  code: yup.string().required("Le code de la commande est obligatoire."),
  customer: yup.object().shape({
    id: yup.string().required("Veuillez sélectionner un client."),
  }),
  items: yup.array().of(
    yup.object().shape({
      product: yup.object().shape({
        id: yup.string().required("Veuillez sélectionner un produit."),
      }),
      amount: yup.number().required("Le nombre de colis est requis."),
      unitPrice: yup.number().required("Le prix par colis est requis."),
    })
  ),
});

const areEqual = (
  defaultValues: OrderViewModel,
  updatedOrder: UpdateOrderViewModelProps
) => {
  const order = OrderViewModel.create({
    id: defaultValues.id,
    ...updatedOrder,
  });
  return defaultValues.equals(order);
};

export const UpdateOrderLogic = ({
  defaultValues,
  onSubmit,
  errors,
  list,
}: UpdateOrderLogicProps) => {
  const navigate = useNavigate();
  const form = useForm<UpdateOrderViewModelProps>({
    defaultValues: defaultValues.props,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (updatedOrder: UpdateOrderViewModelProps) => {
    if (areEqual(defaultValues, updatedOrder)) {
      toast.info("Nothing to save");
      return;
    }
    await onSubmit(updatedOrder)
      .then((result) => {
        const { id, code } = result.data?.updateOrder ?? {};
        if (id) {
          toast.success(`${code} a été modifié(e) avec succès.`);
          navigate(ordersNavigationHelper.view(id));
        } else {
          toast.warn(`La commande retournée par le serveur n'est pas valide.`);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `La modification de la commande ${updatedOrder.code} a échouée.`
        );
      });
  };

  const handleReset = () => form.reset();

  return (
    <UpdateOrderView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
      list={list}
    ></UpdateOrderView>
  );
};
