import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { CreateOrder } from "../../../../features/orders/CreateOrder";
import { UpdateOrder } from "../../../../features/orders/UpdateOrder";

export const UpdateOrderPage = () => {
  const { orderId } = useParams();

  const upsertComponent = orderId ? (
    <UpdateOrder orderId={orderId}></UpdateOrder>
  ) : (
    <CreateOrder></CreateOrder>
  );

  return <Page title="UpdateOrder">{upsertComponent}</Page>;
};
