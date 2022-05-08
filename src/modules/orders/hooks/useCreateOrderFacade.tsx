import { BaseID } from "../../../core/domain/BaseID";
import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { useGetCustomerListFacade } from "../../customers/hooks/useGetCustomerListFacade";
import { useGetProductListFacade } from "../../products/hooks/useGetProductListFacade";
import { CreateOrderViewModelProps } from "../domain/orders.model";
import { CreateOrderMap } from "../mappers/create-order.mapper";
import {
  CreateOrderMutation,
  useCreateOrderMutation,
} from "../operations/orders.generated";

export const useCreateOrderFacade = () => {
  const { getCustomerList } = useGetCustomerListFacade();
  const { getProductList } = useGetProductListFacade();
  const [createOrder, { error, loading }] = useCreateOrderMutation({
    update(cache, { data: addedOrder }) {
      cache.modify({
        fields: {
          getOrder(existingOrder, { toReference }) {
            return addedOrder ? toReference(addedOrder) : existingOrder;
          },
          getOrders: (existingItems = [], { toReference }) => {
            return (
              (addedOrder?.createOrder && [
                ...existingItems,
                toReference(addedOrder.createOrder),
              ]) ||
              existingItems
            );
          },
        },
      });
    },
  });

  const getData = <T extends BaseID>(id: string, list: T[]) =>
    list.find((item) => item.id === id) ?? ({} as T);

  const handleCreate = (
    data: CreateOrderViewModelProps,
    options?: BaseCallbackOptions<CreateOrderMutation>
  ) => {
    const customer = getData(data.customer.id, getCustomerList.data);
    const items = data.items.map((item) => ({
      ...item,
      product: getData(item.product.id, getProductList.data),
    }));
    return createOrder({
      variables: {
        createOrderInput: CreateOrderMap.toDto({
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
    createOrder: { onCreate: handleCreate, error, loading },
    customers: getCustomerList,
    products: getProductList,
  };
};
