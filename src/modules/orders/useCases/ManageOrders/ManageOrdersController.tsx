import { Loader } from "../../../../components/Loader";
import { useGetOrderListFacade } from "../../hooks/useGetOrderListFacade";
import { useRemoveOrderListFacade } from "../../hooks/useRemoveOrderListFacade";
import { ManageOrdersLogic } from "./ManageOrdersLogic";

export const ManageOrdersController = () => {
  const { getOrderList } = useGetOrderListFacade();
  const { removeOrderList } = useRemoveOrderListFacade();

  const handleRemove = (ids: string[]) => {
    return removeOrderList.onRemove(ids);
  };

  if (getOrderList.loading) return <Loader></Loader>;
  return (
    <ManageOrdersLogic
      data={getOrderList.data}
      onRemove={handleRemove}
    ></ManageOrdersLogic>
  );
};
