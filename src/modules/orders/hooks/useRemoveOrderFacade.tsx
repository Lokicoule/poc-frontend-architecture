import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import {
  RemoveOrderMutation,
  useRemoveOrderMutation,
} from "../operations/orders.generated";

export const useRemoveOrderFacade = () => {
  const [removeOrder, { error, loading }] = useRemoveOrderMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          getOrders(existingOrdersRef, { readField }) {
            return existingOrdersRef.filter(
              (orderRef: any) =>
                data?.removeOrder.id !== readField("id", orderRef)
            );
          },
        },
      });
    },
  });

  const handleRemove = (
    orderId: any,
    options?: BaseCallbackOptions<RemoveOrderMutation>
  ) =>
    removeOrder({
      variables: {
        removeOrderId: orderId,
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });

  return { removeOrder: { onRemove: handleRemove, error, loading } };
};
