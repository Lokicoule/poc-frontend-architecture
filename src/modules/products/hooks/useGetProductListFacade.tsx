import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ProductViewModel } from "../domain/products.model";
import { ProductMap } from "../mappers/product.mapper";
import {
  GetProductsQuery,
  useGetProductsQuery,
} from "../operations/products.generated";

export const useGetProductListFacade = (
  options?: BaseCallbackOptions<GetProductsQuery>
) => {
  const { data, loading, error } = useGetProductsQuery({
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetProductsQuery | undefined) =>
    data?.getProducts?.map((product) =>
      product
        ? ProductMap.toViewModel(product)
        : ProductViewModel.create({
            id: "",
            code: "",
            label: "",
          })
    ) ?? [];
  return { getProductList: { data: mapDtoToViewModel(data), loading, error } };
};
