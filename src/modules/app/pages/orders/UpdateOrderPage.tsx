import { useParams } from "react-router-dom";
import { Page } from "../../../../components/Page/Page";
import { CreateOrder } from "../../../orders/useCases/CreateOrder";
import { UpdateOrder } from "../../../orders/useCases/UpdateOrder";
import { paramsRoutesConfig } from "../../routes/configs/routes.config";

export const UpdateOrderPage = () => {
  const params = useParams();
  const id = params[paramsRoutesConfig.id];

  const upsertComponent = id ? (
    <UpdateOrder orderId={id}></UpdateOrder>
  ) : (
    <CreateOrder></CreateOrder>
  );

  return <Page title="UpdateOrder">{upsertComponent}</Page>;
};
