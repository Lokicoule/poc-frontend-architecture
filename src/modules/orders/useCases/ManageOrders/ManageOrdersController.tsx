import { toast } from "react-toastify";
import { Loader } from "../../../../components/Loader";
import { OrderViewModel } from "../../../../viewModels/orders";
import {
  useGetOrdersQuery,
  useRemoveOrdersMutation,
  GetOrdersQuery,
} from "../../operations/orders.generated";
import { ManageOrdersLogic } from "./ManageOrdersLogic";

export const ManageOrdersController = () => {
  const { data, loading } = useGetOrdersQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
  });
  const [removeOrders] = useRemoveOrdersMutation({
    refetchQueries: ["GetOrders"],
  });

  const handleRemove = (ids: string[]) => {
    return removeOrders({
      variables: {
        ids,
      },
      onCompleted: () => {
        toast.success(
          `Les clients sélectionné(e)s ont étés supprimé(e)s avec succès.`
        );
      },
      onError: () =>
        toast.error(`La suppression des clients sélectionné(e)s a échouée.`),
    });
  };

  const mapDtoToViewModel = (
    dataDto: GetOrdersQuery | null | undefined
  ): OrderViewModel[] => {
    return dataDto?.getOrders?.map(
      (order) =>
        ({
          id: order?.id,
          code: order?.code,
          billingDate: order?.billingDate,
          dueDate: order?.dueDate,
          customer: {
            id: order.customer.id,
            code: order.customer.code,
          },
          items: order?.items || [],
        } as OrderViewModel)
    ) as OrderViewModel[];
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageOrdersLogic
      data={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageOrdersLogic>
  );
};
