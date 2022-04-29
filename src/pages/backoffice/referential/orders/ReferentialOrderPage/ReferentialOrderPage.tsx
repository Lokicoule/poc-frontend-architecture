import { Page } from "../../../../../components/Page";
import { ManageReferentialOrder } from "../../../../../modules/orders/useCases/ManageReferentialOrder";

export const ReferentialOrderPage = () => {
  return (
    <Page title="Order Referential">
      <ManageReferentialOrder></ManageReferentialOrder>
    </Page>
  );
};
