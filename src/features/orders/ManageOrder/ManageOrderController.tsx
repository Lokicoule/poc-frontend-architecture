import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetOrderQuery,
  useGetOrderQuery,
  useRemoveOrderMutation,
} from "../../../api/hooks/orders.generated";
import { OrderItem, Product } from "../../../api/types/types.generated";
import { Loader } from "../../../components";
import {
  OrderItemViewModel,
  OrderViewModel,
} from "../../../view-models/orders";
import { ProductViewModel } from "../../../view-models/products";
import { ManageOrderLogic } from "./ManageOrderLogic";

type ManageOrderControllerProps = {
  orderId: string | undefined;
};

export const ManageOrderController = ({
  orderId = "",
}: ManageOrderControllerProps) => {
  const navigate = useNavigate();
  const [removeOrder] = useRemoveOrderMutation({
    update(cache, { data: removeOrderData }) {
      cache.modify({
        fields: {
          getOrders(existingOrdersRef, { readField }) {
            return existingOrdersRef.filter(
              (OrderRef: any) =>
                removeOrderData?.removeOrder.id !== readField("id", OrderRef)
            );
          },
        },
      });
    },
  });
  const { data, loading } = useGetOrderQuery({
    variables: {
      getOrderId: orderId,
      populate: true,
    },
    onError: () => navigate("/backoffice/orders"),
  });

  const mapProductDtoToViewModel = (product: Product | null | undefined) =>
    ({
      id: product?.id,
      code: product?.code,
      label: product?.label,
    } as ProductViewModel);

  const mapItemsDtoToViewModel = (
    items: OrderItem[] | null | undefined
  ): OrderItemViewModel[] =>
    items?.map(
      (item) =>
        ({
          id: item.id,
          amount: item.amount,
          unitPrice: item.unitPrice,
          product: mapProductDtoToViewModel(item.product),
        } as OrderItemViewModel)
    ) as OrderItemViewModel[];

  const mapDtoToViewModel = (
    dataDto: GetOrderQuery | undefined
  ): Readonly<OrderViewModel> => {
    const order = dataDto?.getOrder;
    return {
      code: order?.code || "",
      billingDate: order?.billingDate,
      dueDate: order?.dueDate,
      items: mapItemsDtoToViewModel(order?.items),
      id: orderId,
    };
  };
  const handleRemove = (id: string) =>
    removeOrder({
      variables: {
        removeOrderId: id,
      },
      onCompleted: () => {
        toast.success(`${data?.getOrder?.code} a été supprimé avec succès.`);
        navigate("/backoffice/orders");
      },
    });

  if (loading) return <Loader></Loader>;

  return (
    <ManageOrderLogic
      defaultValues={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageOrderLogic>
  );
};
