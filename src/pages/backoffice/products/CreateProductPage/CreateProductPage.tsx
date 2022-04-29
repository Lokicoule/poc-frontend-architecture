import { Page } from "../../../../components/Page/Page";
import { CreateProduct } from "../../../../modules/products/useCases/CreateProduct";

export const CreateProductPage = () => {
  return (
    <Page title="CreateProduct">
      <CreateProduct></CreateProduct>
    </Page>
  );
};
