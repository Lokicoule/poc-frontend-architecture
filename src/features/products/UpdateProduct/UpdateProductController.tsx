import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetProductQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../../api/hooks/products.generated";
import { Loader } from "../../../components";
import { UpdateProductViewModel } from "../../../view-models/domain/products";
import { UpdateProductLogic } from "./UpdateProductLogic";

type UpdateProductControllerProps = {
  productId: string;
};

export const UpdateProductController = ({
  productId,
}: UpdateProductControllerProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetProductQuery({
    variables: {
      getProductId: productId,
    },
  });
  const [updateProduct, { error }] = useUpdateProductMutation({
    update(cache, { data: updatedProduct }) {
      cache.modify({
        fields: {
          getProduct(existingProduct, { toReference }) {
            return updatedProduct
              ? toReference(updatedProduct)
              : existingProduct;
          },
        },
      });
    },
  });

  const mapViewModelToDto = (dataVM: UpdateProductViewModel) => {
    return {
      code: dataVM.code,
      label: dataVM.label,
    };
  };

  const mapDtoToViewModel = (
    dataDto: GetProductQuery | undefined
  ): UpdateProductViewModel => {
    const product = dataDto?.getProduct;
    return {
      code: product?.code || "",
      label: product?.label || "",
    };
  };

  const handleSubmit = (dataVM: UpdateProductViewModel) => {
    return updateProduct({
      variables: {
        updateProductId: productId,
        updateProductInput: mapViewModelToDto(dataVM),
      },
      onCompleted: ({ updateProduct }) => {
        toast.success(`${updateProduct.label} a été modifié avec succès.`);
        navigate(`/backoffice/products/view/${updateProduct.id}`);
      },
      onError: () =>
        toast.error(
          `La modification du produit ${data?.getProduct?.label} a échouée.`
        ),
    });
  };

  if (loading) return <Loader></Loader>;
  return (
    <UpdateProductLogic
      defaultValues={mapDtoToViewModel(data)}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></UpdateProductLogic>
  );
};
