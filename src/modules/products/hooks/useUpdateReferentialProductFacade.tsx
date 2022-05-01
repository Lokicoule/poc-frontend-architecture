import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialProductViewModel } from "../domain/referential-product.model";
import { ReferentialProductMap } from "../mappers/referential-product.mapper";
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
    referentialProductId: any,
    data: ReferentialProductViewModel,
    options?: BaseCallbackOptions<UpdateReferentialProductMutation>
  ) => {
    return updateReferentialProduct({
      variables: {
        updateReferentialProductId: referentialProductId,
        updateReferentialProductInput: ReferentialProductMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return {
    updateReferentialProduct: { onUpdate: handleUpdate, error, loading },
  };
};
