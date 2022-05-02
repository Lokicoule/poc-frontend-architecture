import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialOrderViewModel } from "../domain/referential-order.model";
import { UpdateReferentialOrderMap } from "../mappers/update-referential-order.mapper";
import {
  UpdateReferentialOrderMutation,
  useUpdateReferentialOrderMutation,
} from "../operations/referential-orders.generated";

export const useUpdateReferentialOrderFacade = () => {
  const [updateReferentialOrder, { error, loading }] =
    useUpdateReferentialOrderMutation({
      refetchQueries: ["GetReferentialOrders"],
    });

  const handleUpdate = (
    updateReferentialOrderId: string,
    data: ReferentialOrderViewModel,
    options?: BaseCallbackOptions<UpdateReferentialOrderMutation>
  ) => {
    return updateReferentialOrder({
      variables: {
        updateReferentialOrderId,
        updateReferentialOrderInput: UpdateReferentialOrderMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return {
    updateReferentialOrder: { onUpdate: handleUpdate, error, loading },
  };
};
