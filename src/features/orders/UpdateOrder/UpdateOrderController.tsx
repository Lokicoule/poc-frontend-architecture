import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetOrderQuery,
  useGetOrderQuery,
  useUpdateOrderMutation,
} from "../../../api/hooks/orders.generated";
import {
  CreateOrderInput,
  OrderItemInput,
} from "../../../api/types/types.generated";
import { Loader } from "../../../components";
import {
  FormOrderItemViewModel,
  FormOrderViewModel,
} from "../../../view-models/orders";
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
          getOrders: (existingItems = [], { toReference }) => {
            console.log("====================================");
            console.log(existingItems);
            console.log("====================================");
            return (
              (updatedOrder?.updateOrder && [
                ...existingItems,
                toReference(updatedOrder.updateOrder),
              ]) ||
              existingItems
            );
          },
        },
      });
    },
  });

  const mapDtoToViewModel = (
    dataDto: GetOrderQuery | undefined
  ): FormOrderViewModel => {
    const order = dataDto?.getOrder;
    return {
      code: order?.code || "",
      billingDate: new Date(order?.billingDate),
      dueDate: new Date(order?.dueDate),
      customer: order?.customer.id,
      items: order?.items?.map((item) => ({
        amount: item.amount,
        unitPrice: item.unitPrice,
        product: item.product?.id,
      })),
    } as FormOrderViewModel;
  };

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

  const handleSubmit = (dataVM: FormOrderViewModel) => {
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
