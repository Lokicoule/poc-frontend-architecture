import { Page } from "../../../../components/Page/Page";
import { CreateOrder } from "../../../../modules/orders/useCases/CreateOrder";

export const CreateOrderPage = () => {
  return (
    <Page title="CreateOrder">
      <CreateOrder></CreateOrder>
    </Page>
  );
};
