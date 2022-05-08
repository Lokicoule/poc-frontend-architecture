import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { OrderViewModel, OrderViewModelProps } from "../domain/orders.model";
import { OrderMap } from "../mappers/order.mapper";
import {
  GetOrdersQuery,
  useGetOrdersQuery,
} from "../operations/orders.generated";

export const useGetOrderListFacade = (
  options?: BaseCallbackOptions<GetOrdersQuery>
) => {
  const { data, loading, error } = useGetOrdersQuery({
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetOrdersQuery | undefined) =>
    data?.getOrders?.map((order) =>
      order
        ? OrderMap.toViewModel(order)
        : OrderViewModel.create({} as OrderViewModelProps)
    ) ?? [];
  return { getOrderList: { data: mapDtoToViewModel(data), loading, error } };
};
