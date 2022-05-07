import { Page } from "../../../../components/Page";
import { ManageOrders } from "../../../../modules/orders/useCases/ManageOrders";

export const OrdersPage = () => {
  return (
    <Page title="Orders">
      <ManageOrders></ManageOrders>
    </Page>
  );
};
