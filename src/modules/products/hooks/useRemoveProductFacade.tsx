import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import {
  RemoveProductMutation,
  useRemoveProductMutation,
} from "../operations/products.generated";

export const useRemoveProductFacade = () => {
  const [removeProduct, { error, loading }] = useRemoveProductMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          getProducts(existingProductsRef, { readField }) {
            return existingProductsRef.filter(
              (productRef: any) =>
                data?.removeProduct.id !== readField("id", productRef)
            );
          },
        },
      });
    },
  });

  const handleRemove = (
    productId: any,
    options?: BaseCallbackOptions<RemoveProductMutation>
  ) =>
    removeProduct({
      variables: {
        removeProductId: productId,
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });

  return { removeProduct: { onRemove: handleRemove, error, loading } };
};
