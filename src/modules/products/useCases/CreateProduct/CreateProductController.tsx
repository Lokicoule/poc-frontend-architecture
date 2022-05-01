import { CreateProductViewModelProps } from "../../domain/products.model";
import { useCreateProductFacade } from "../../hooks/useCreateProductFacade";
import { CreateProductLogic } from "./CreateProductLogic";

const defaultValues = {
  code: "",
  label: "",
} as Readonly<CreateProductViewModelProps>;

export const CreateProductController = () => {
  const { createProduct } = useCreateProductFacade();

  const handleSubmit = (data: CreateProductViewModelProps) => {
    return createProduct.onCreate(data);
  };

  return (
    <CreateProductLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={createProduct.error?.graphQLErrors}
    ></CreateProductLogic>
  );
};
