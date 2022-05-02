import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialOrderViewModel } from "../domain/referential-order.model";
import { UseCaseReferentialEnum } from "../dtos/orders.dto.generated";
import { ReferentialOrderMap } from "../mappers/referential-order.mapper";
import {
  GetReferentialOrderQuery,
  useGetReferentialOrderQuery,
} from "../operations/referential-orders.generated";

export const useGetReferentialOrderFacade = (
  referentialOrderId: any,
  options?: BaseCallbackOptions<GetReferentialOrderQuery>
) => {
  const { data, loading, error } = useGetReferentialOrderQuery({
    variables: {
      getReferentialOrderId: referentialOrderId,
      populate: true,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetReferentialOrderQuery | undefined) =>
    data?.getReferentialOrder
      ? ReferentialOrderMap.toViewModel(data?.getReferentialOrder)
      : ReferentialOrderViewModel.create({
          id: "",
          useCase: UseCaseReferentialEnum.CodeGenerator,
          parameters: [],
        });

  return {
    getReferentialOrder: { data: mapDtoToViewModel(data), loading, error },
  };
};
