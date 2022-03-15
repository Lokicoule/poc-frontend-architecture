import { toast } from "react-toastify";
import {
  GetOrdersQuery,
  useGetOrdersQuery,
  useRemoveOrdersMutation,
} from "../../../api/hooks/orders.generated";
import { Loader } from "../../../components";
import { OrderViewModel } from "../../../view-models/orders";
import { ManageOrdersLogic } from "./ManageOrdersLogic";

export const ManageOrdersController = () => {
  const { data, loading } = useGetOrdersQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
    variables: {
      populateCustomer: true,
      populateItems: true,
    },
  });
  console.log(data);
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
