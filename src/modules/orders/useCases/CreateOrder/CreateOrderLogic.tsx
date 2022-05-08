import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CreateOrderViewModelProps } from "../../domain/orders.model";
import { ordersNavigationHelper } from "../../helpers/orders-navigation.helper";
import { CreateOrderMutation } from "../../operations/orders.generated";
import { CreateOrderView, CreateOrderViewProps } from "./CreateOrderView";

type CreateOrderLogicProps = Pick<CreateOrderViewProps, "errors" | "list"> & {
  defaultValues: CreateOrderViewModelProps;
  onSubmit: (
    data: CreateOrderViewModelProps
  ) => Promise<
    FetchResult<CreateOrderMutation, Record<string, any>, Record<string, any>>
  >;
};

const schema = yup.object().shape({
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

export const CreateOrderLogic = ({
  list,
  defaultValues,
  onSubmit,
  errors,
}: CreateOrderLogicProps) => {
  const navigate = useNavigate();
  const form = useForm<CreateOrderViewModelProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();

  const handleSubmit = async (data: CreateOrderViewModelProps) => {
    await onSubmit(data)
      .then((result) => {
        console.log(data, result);
        const { id, code } = result.data?.createOrder ?? {};
        if (id) {
          toast.success(`${code} a été ajouté(e) avec succès.`);
          navigate(ordersNavigationHelper.view(id));
        } else {
          toast.warn(`Le client retourné par le serveur n'est pas valide.`);
        }
      })
      .catch((error) =>
        toast.error(`L'ajout du client ${data.code} a échoué.`)
      );
  };

  return (
    <CreateOrderView
      form={form}
      list={list}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></CreateOrderView>
  );
};
