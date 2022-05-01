import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialProductViewModel } from "../domain/referential-product.model";
import { UseCaseReferentialEnum } from "../dtos/products.dto.generated";
import { ReferentialProductMap } from "../mappers/referential-product.mapper";
import {
  GetReferentialProductQuery,
  useGetReferentialProductQuery,
} from "../operations/referential-products.generated";

export const useGetReferentialProductFacade = (
  referentialProductId: any,
  options?: BaseCallbackOptions<GetReferentialProductQuery>
) => {
  const { data, loading, error } = useGetReferentialProductQuery({
    variables: {
      getReferentialProductId: referentialProductId,
      populate: true,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetReferentialProductQuery | undefined) =>
    data?.getReferentialProduct
      ? ReferentialProductMap.toViewModel(data?.getReferentialProduct)
      : ReferentialProductViewModel.create({
          id: "",
          useCase: UseCaseReferentialEnum.CodeGenerator,
          parameters: [],
        });

  return {
    getReferentialProduct: { data: mapDtoToViewModel(data), loading, error },
  };
};
