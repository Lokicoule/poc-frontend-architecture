import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ProductViewModel } from "../domain/products.model";
import { ProductMap } from "../mappers/product.mapper";
import {
  GetProductQuery,
  useGetProductQuery,
} from "../operations/products.generated";

export const useGetProductFacade = (
  productId: any,
  options?: BaseCallbackOptions<GetProductQuery>
) => {
  const { data, loading, error } = useGetProductQuery({
    variables: {
      getProductId: productId,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetProductQuery | undefined) =>
    data?.getProduct
      ? ProductMap.toViewModel(data?.getProduct)
      : ({} as ProductViewModel);

  return { getProduct: { data: mapDtoToViewModel(data), loading, error } };
};
