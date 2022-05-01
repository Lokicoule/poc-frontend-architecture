import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { CreateProductViewModel } from "../domain/products.model";
import { CreateProductMap } from "../mappers/create-product.mapper";
import {
  CreateProductMutation,
  useCreateProductMutation,
} from "../operations/products.generated";

export const useCreateProductFacade = () => {
  const [createProduct, { error, loading }] = useCreateProductMutation({
    update(cache, { data: addedProduct }) {
      cache.modify({
        fields: {
          getProduct(existingProduct, { toReference }) {
            return addedProduct ? toReference(addedProduct) : existingProduct;
          },
          getProducts: (existingItems = [], { toReference }) => {
            return (
              (addedProduct?.createProduct && [
                ...existingItems,
                toReference(addedProduct.createProduct),
              ]) ||
              existingItems
            );
          },
        },
      });
    },
  });

  const handleCreate = (
    data: CreateProductViewModel,
    options?: BaseCallbackOptions<CreateProductMutation>
  ) => {
    return createProduct({
      variables: {
        createProductInput: CreateProductMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return { createProduct: { onCreate: handleCreate, error, loading } };
};
