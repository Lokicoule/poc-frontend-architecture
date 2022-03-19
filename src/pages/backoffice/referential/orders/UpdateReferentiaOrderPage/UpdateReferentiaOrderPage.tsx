import { useParams } from "react-router-dom";
import { Page } from "../../../../../components/Page/Page";
import { UpdateReferentialOrder } from "../../../../../features/referential/orders";

export const UpdateReferentialOrderPage = () => {
  const { referentialOrderId } = useParams();

  return (
    <Page title="UpdateOrder">
      <UpdateReferentialOrder
        referentialOrderId={referentialOrderId || ""}
      ></UpdateReferentialOrder>
    </Page>
  );
};
