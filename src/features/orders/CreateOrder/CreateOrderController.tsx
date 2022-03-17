import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateOrderMutation } from "../../../api/hooks/orders.generated";
import {
  CreateOrderInput,
  OrderItemInput,
} from "../../../api/types/types.generated";
import { addDays } from "../../../utils/DateUtils";
import {
  CreateOrderItemViewModel,
  CreateOrderViewModel,
} from "../../../view-models/orders";
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
} as Readonly<CreateOrderViewModel>;

export const CreateOrderController = () => {
  const navigate = useNavigate();

  const [createOrder, { error }] = useCreateOrderMutation({
    update(cache, { data: addedOrder }) {
      cache.modify({
        fields: {
          getOrder(existingOrder, { toReference }) {
            return addedOrder ? toReference(addedOrder) : existingOrder;
          },
          getOrders: (existingItems = [], { toReference }) => {
            return (
              (addedOrder?.createOrder && [
                ...existingItems,
                toReference(addedOrder.createOrder),
              ]) ||
              existingItems
            );
          },
        },
      });
    },
  });

  const mapItemsViewModelToDto = (
    items: CreateOrderItemViewModel[]
  ): OrderItemInput[] =>
    items.map(
      (item) =>
        ({
          amount: Number(item.amount),
          product: item.product,
          unitPrice: Number(item.unitPrice),
        } as OrderItemInput)
    );

  const mapViewModelToDto = (data: CreateOrderViewModel): CreateOrderInput => ({
    code: data?.code,
    customer: data.customer,
    billingDate: data?.billingDate,
    dueDate: data?.dueDate,
    items: mapItemsViewModelToDto(data?.items),
  });

  const handleSubmit = (data: CreateOrderViewModel) => {
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
