import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { UpdateProductViewModel } from "../domain/products.model";
import { UpdateProductMap } from "../mappers/update-product.mapper";
import {
  UpdateProductMutation,
  useUpdateProductMutation,
} from "../operations/products.generated";

export const useUpdateProductFacade = () => {
  const [updateProduct, { error, loading }] = useUpdateProductMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          getProduct(existingProduct, { toReference }) {
            return data ? toReference(data) : existingProduct;
          },
        },
      });
    },
  });

  const handleUpdate = (
    productId: any,
    data: UpdateProductViewModel,
    options?: BaseCallbackOptions<UpdateProductMutation>
  ) => {
    return updateProduct({
      variables: {
        updateProductId: productId,
        updateProductInput: UpdateProductMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return { updateProduct: { onUpdate: handleUpdate, error, loading } };
};
