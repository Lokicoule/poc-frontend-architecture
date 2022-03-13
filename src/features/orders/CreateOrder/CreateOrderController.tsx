import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateOrderMutation } from "../../../api/hooks/orders.generated";
import { CreateOrderViewModel } from "../../../view-models/orders";
import { CreateOrderLogic } from "./CreateOrderLogic";

const defaultValues = {
  code: "",
  label: "",
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

  const mapViewModelToDto = (data: CreateOrderViewModel) => ({
    code: data.code,
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
