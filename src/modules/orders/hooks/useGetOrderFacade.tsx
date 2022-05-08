import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { OrderViewModel, OrderViewModelProps } from "../domain/orders.model";
import { OrderMap } from "../mappers/order.mapper";
import {
  GetOrderQuery,
  useGetOrderQuery,
} from "../operations/orders.generated";

export const useGetOrderFacade = (
  orderId: any,
  options?: BaseCallbackOptions<GetOrderQuery>
) => {
  const { data, loading, error } = useGetOrderQuery({
    variables: {
      getOrderId: orderId,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetOrderQuery | undefined) =>
    data?.getOrder
      ? OrderMap.toViewModel(data?.getOrder)
      : OrderViewModel.create({} as OrderViewModelProps);

  return { getOrder: { data: mapDtoToViewModel(data), loading, error } };
};
