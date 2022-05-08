import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import {
  RemoveOrdersMutation,
  useRemoveOrdersMutation,
} from "../operations/orders.generated";

export const useRemoveOrderListFacade = () => {
  const [removeOrders, { error, loading }] = useRemoveOrdersMutation({
    refetchQueries: ["GetOrders"],
  });

  const handleRemove = (
    ids: string[],
    options?: BaseCallbackOptions<RemoveOrdersMutation>
  ) =>
    removeOrders({
      variables: {
        ids,
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });

  return { removeOrderList: { onRemove: handleRemove, error, loading } };
};
