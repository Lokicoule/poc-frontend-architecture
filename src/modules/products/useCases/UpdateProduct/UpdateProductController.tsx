import { Loader } from "../../../../components/Loader";
import { UpdateProductViewModel } from "../../../../viewModels/products";
import { useGetProductFacade } from "../../hooks/useGetProductFacade";
import { useUpdateProductFacade } from "../../hooks/useUpdateProductFacade";
import { UpdateProductLogic } from "./UpdateProductLogic";

type UpdateProductControllerProps = {
  productId: string;
};

export const UpdateProductController = ({
  productId,
}: UpdateProductControllerProps) => {
  const { getProduct } = useGetProductFacade(productId);
  const { updateProduct } = useUpdateProductFacade();

  const handleSubmit = (updatedProduct: UpdateProductViewModel) =>
    updateProduct.onUpdate(productId, updatedProduct);

  if (getProduct.loading) return <Loader></Loader>;
  return (
    <UpdateProductLogic
      defaultValues={getProduct.data}
      onSubmit={handleSubmit}
      errors={updateProduct.error?.graphQLErrors}
    ></UpdateProductLogic>
  );
};
