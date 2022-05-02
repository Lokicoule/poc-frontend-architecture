import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialProductViewModel } from "../domain/referential-product.model";
import { UpdateReferentialProductMap } from "../mappers/update-referential-product.mapper";
import {
  UpdateReferentialProductMutation,
  useUpdateReferentialProductMutation,
} from "../operations/referential-products.generated";

export const useUpdateReferentialProductFacade = () => {
  const [updateReferentialProduct, { error, loading }] =
    useUpdateReferentialProductMutation({
      refetchQueries: ["GetReferentialProducts"],
    });

  const handleUpdate = (
    updateReferentialProductId: string,
    data: ReferentialProductViewModel,
    options?: BaseCallbackOptions<UpdateReferentialProductMutation>
  ) => {
    return updateReferentialProduct({
      variables: {
        updateReferentialProductId,
        updateReferentialProductInput: UpdateReferentialProductMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return {
    updateReferentialProduct: { onUpdate: handleUpdate, error, loading },
  };
};
