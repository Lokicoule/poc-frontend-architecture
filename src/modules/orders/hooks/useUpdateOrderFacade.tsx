import { BaseID } from "../../../core/domain/BaseID";
import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { useGetCustomerListFacade } from "../../customers/hooks/useGetCustomerListFacade";
import { useGetProductListFacade } from "../../products/hooks/useGetProductListFacade";
import { UpdateOrderViewModelProps } from "../domain/orders.model";
import { UpdateOrderMap } from "../mappers/update-order.mapper";
import {
  UpdateOrderMutation,
  useUpdateOrderMutation,
} from "../operations/orders.generated";

export const useUpdateOrderFacade = () => {
  const { getCustomerList } = useGetCustomerListFacade();
  const { getProductList } = useGetProductListFacade();
  const [updateOrder, { error, loading }] = useUpdateOrderMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          getOrder(existingOrder, { toReference }) {
            return data ? toReference(data) : existingOrder;
          },
        },
      });
    },
  });

  const getData = <T extends BaseID>(id: string, list: T[]) =>
    list.find((item) => item.id === id) ?? ({} as T);

  const handleUpdate = (
    orderId: any,
    data: UpdateOrderViewModelProps,
    options?: BaseCallbackOptions<UpdateOrderMutation>
  ) => {
    const customer = getData(data.customer.id, getCustomerList.data);
    const items = data.items.map((item) => ({
      ...item,
      product: getData(item.product.id, getProductList.data),
    }));
    return updateOrder({
      variables: {
        updateOrderId: orderId,
        updateOrderInput: UpdateOrderMap.toDto({
          ...data,
          customer: customer,
          items: items,
        }),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return {
    updateOrder: { onUpdate: handleUpdate, error, loading },
    customers: getCustomerList,
    products: getProductList,
  };
};
