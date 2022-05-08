import { Loader } from "../../../../components/Loader";
import { UpdateOrderViewModelProps } from "../../domain/orders.model";
import { useGetOrderFacade } from "../../hooks/useGetOrderFacade";
import { useUpdateOrderFacade } from "../../hooks/useUpdateOrderFacade";
import { UpdateOrderLogic } from "./UpdateOrderLogic";

type UpdateOrderControllerProps = {
  orderId: string;
};

export const UpdateOrderController = ({
  orderId,
}: UpdateOrderControllerProps) => {
  const { getOrder } = useGetOrderFacade(orderId);
  const { updateOrder, customers, products } = useUpdateOrderFacade();

  const handleSubmit = (updatedOrder: UpdateOrderViewModelProps) =>
    updateOrder.onUpdate(orderId, updatedOrder);

  if (getOrder.loading) return <Loader></Loader>;
  return (
    <UpdateOrderLogic
      defaultValues={getOrder.data}
      onSubmit={handleSubmit}
      errors={getOrder.error?.graphQLErrors}
      list={{ customers: customers.data, products: products.data }}
    ></UpdateOrderLogic>
  );
};
