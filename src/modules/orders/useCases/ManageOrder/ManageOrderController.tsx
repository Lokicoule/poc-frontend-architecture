import { useNavigate } from "react-router-dom";
import { Loader } from "../../../../components/Loader";
import { ordersNavigationHelper } from "../../helpers/orders-navigation.helper";
import { useGetOrderFacade } from "../../hooks/useGetOrderFacade";
import { useRemoveOrderFacade } from "../../hooks/useRemoveOrderFacade";
import { ManageOrderLogic } from "./ManageOrderLogic";

type ManageOrderControllerProps = {
  orderId: string | undefined;
};

export const ManageOrderController = ({
  orderId = "",
}: ManageOrderControllerProps) => {
  const navigate = useNavigate();
  const { getOrder } = useGetOrderFacade(orderId);
  const { removeOrder } = useRemoveOrderFacade();

  const handleRemove = (id: string) => removeOrder.onRemove(id);

  if (getOrder.loading) return <Loader></Loader>;
  if (getOrder.error) navigate(ordersNavigationHelper.root());
  return (
    <ManageOrderLogic
      defaultValues={getOrder.data}
      onRemove={handleRemove}
    ></ManageOrderLogic>
  );
};
