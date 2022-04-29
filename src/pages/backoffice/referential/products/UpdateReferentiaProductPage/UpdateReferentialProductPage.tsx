import { useParams } from "react-router-dom";
import { Page } from "../../../../../components/Page/Page";
import { UpdateReferentialProduct } from "../../../../../modules/products/useCases/UpdateReferentialProduct";

export const UpdateReferentialProductPage = () => {
  const { referentialProductId } = useParams();

  return (
    <Page title="UpdateProduct">
      <UpdateReferentialProduct
        referentialProductId={referentialProductId || ""}
      ></UpdateReferentialProduct>
    </Page>
  );
};
