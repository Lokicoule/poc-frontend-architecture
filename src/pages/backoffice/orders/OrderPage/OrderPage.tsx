import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { ManageOrder } from "../../../../modules/orders/useCases/ManageOrder";

export const OrderPage = () => {
  const { orderId } = useParams();

  return (
    <Page title="Order">
      <ManageOrder orderId={orderId} />
    </Page>
  );
};
