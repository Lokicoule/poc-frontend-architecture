import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialProductViewModel } from "../domain/referential-product.model";
import { ReferentialProduct } from "../dtos/products.dto.generated";
import { ReferentialProductMap } from "../mappers/referential-product.mapper";
import {
  GetReferentialProductsQuery,
  useGetReferentialProductsQuery,
} from "../operations/referential-products.generated";

export const useGetReferentialProductListFacade = (
  options?: BaseCallbackOptions<GetReferentialProductsQuery>
) => {
  const { data, loading, error } = useGetReferentialProductsQuery({
    variables: {
      populate: true,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetReferentialProductsQuery | undefined) =>
    data?.getReferentialProducts?.map(
      (referentialProduct: ReferentialProduct) =>
        referentialProduct
          ? ReferentialProductMap.toViewModel(referentialProduct)
          : ({} as ReferentialProductViewModel)
    ) ?? [];

  return {
    getReferentialProductList: {
      data: mapDtoToViewModel(data),
      loading,
      error,
    },
  };
};
