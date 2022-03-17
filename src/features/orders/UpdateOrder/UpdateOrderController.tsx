import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetOrderQuery,
  useGetOrderQuery,
  useUpdateOrderMutation,
} from "../../../api/hooks/orders.generated";
import { Loader } from "../../../components";
import { UpdateOrderViewModel } from "../../../view-models/orders";
import { UpdateOrderLogic } from "./UpdateOrderLogic";

type UpdateOrderControllerProps = {
  orderId: string;
};

export const UpdateOrderController = ({
  orderId,
}: UpdateOrderControllerProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetOrderQuery({
    variables: {
      getOrderId: orderId,
      populateCustomer: true,
      populateItems: true,
    },
  });
  const [updateOrder, { error }] = useUpdateOrderMutation({
    update(cache, { data: updatedOrder }) {
      cache.modify({
        fields: {
          getOrder(existingOrder, { toReference }) {
            return updatedOrder ? toReference(updatedOrder) : existingOrder;
          },
        },
      });
    },
  });

  const mapViewModelToDto = (dataVM: UpdateOrderViewModel) => {
    return {
      code: dataVM.code,
    };
  };

  const mapDtoToViewModel = (
    dataDto: GetOrderQuery | undefined
  ): UpdateOrderViewModel => {
    const order = dataDto?.getOrder;
    return {
      code: order?.code || "",
    };
  };

  const handleSubmit = (dataVM: UpdateOrderViewModel) => {
    return updateOrder({
      variables: {
        updateOrderId: orderId,
        updateOrderInput: mapViewModelToDto(dataVM),
      },
      onCompleted: ({ updateOrder }) => {
        toast.success(`${updateOrder.code} a été modifié avec succès.`);
        navigate(`/backoffice/orders/view/${updateOrder.id}`);
      },
      onError: () =>
        toast.error(
          `La modification du produit ${data?.getOrder?.code} a échouée.`
        ),
    });
  };

  if (loading) return <Loader></Loader>;
  return (
    <UpdateOrderLogic
      defaultValues={mapDtoToViewModel(data)}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></UpdateOrderLogic>
  );
};
