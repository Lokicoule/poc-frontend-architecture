import { Page } from "../../../../components/Page";
import { ManageOrders } from "../../../../features/orders/ManageOrders";

export const OrdersPage = () => {
  return (
    <Page title="Orders">
      <ManageOrders></ManageOrders>
    </Page>
  );
};
