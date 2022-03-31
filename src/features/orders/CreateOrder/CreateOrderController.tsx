import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateOrderMutation } from "../../../api/fdo/orders.generated";
import {
  CreateOrderInput,
  OrderItemInput,
} from "../../../types/dto-types.generated";
import { addDays } from "../../../utils/DateUtils";
import {
  FormOrderItemViewModel,
  FormOrderViewModel,
} from "../../../types/orders";
import { CreateOrderLogic } from "./CreateOrderLogic";

const defaultValues = {
  code: "",
  customer: "",
  dueDate: addDays(new Date(), 30),
  billingDate: new Date(),
  items: [
    {
      amount: 0,
      unitPrice: 0,
      product: "",
    },
  ],
} as Readonly<FormOrderViewModel>;

export const CreateOrderController = () => {
  const navigate = useNavigate();

  const [createOrder, { error }] = useCreateOrderMutation({});

  const mapItemsViewModelToDto = (
    items: FormOrderItemViewModel[]
  ): OrderItemInput[] =>
    items.map(
      (item) =>
        ({
          amount: Number(item.amount),
          product: item.product,
          unitPrice: Number(item.unitPrice),
        } as OrderItemInput)
    );

  const mapViewModelToDto = (data: FormOrderViewModel): CreateOrderInput => ({
    code: data?.code,
    customer: data.customer,
    billingDate: data?.billingDate,
    dueDate: data?.dueDate,
    items: mapItemsViewModelToDto(data?.items),
  });

  const handleSubmit = (data: FormOrderViewModel) => {
    return createOrder({
      variables: {
        createOrderInput: mapViewModelToDto(data),
      },
      onCompleted: ({ createOrder }) => {
        toast.success(`${createOrder.code} a été ajoutée avec succès.`);
        navigate(`/backoffice/orders/view/${createOrder.id}`);
      },
      onError: () =>
        toast.error(`L'ajout de la commande ${data.code} a échoué.`),
    });
  };

  return (
    <CreateOrderLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></CreateOrderLogic>
  );
};
