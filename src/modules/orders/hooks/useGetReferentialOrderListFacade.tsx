import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialOrderViewModel } from "../domain/referential-order.model";
import { UseCaseReferentialEnum } from "../dtos/orders.dto.generated";
import { ReferentialOrderMap } from "../mappers/referential-order.mapper";
import {
  GetReferentialOrdersQuery,
  useGetReferentialOrdersQuery,
} from "../operations/referential-orders.generated";

export const useGetReferentialOrderListFacade = (
  options?: BaseCallbackOptions<GetReferentialOrdersQuery>
) => {
  const { data, loading, error } = useGetReferentialOrdersQuery({
    variables: {
      populate: true,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetReferentialOrdersQuery | undefined) =>
    data?.getReferentialOrders?.map((referentialOrder) =>
      referentialOrder
        ? ReferentialOrderMap.toViewModel(referentialOrder)
        : ReferentialOrderViewModel.create({
            id: "",
            useCase: UseCaseReferentialEnum.CodeGenerator,
            parameters: [],
          })
    ) ?? [];

  return {
    getReferentialOrderList: {
      data: mapDtoToViewModel(data),
      loading,
      error,
    },
  };
};
