import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import {
  RemoveProductsMutation,
  useRemoveProductsMutation,
} from "../operations/products.generated";

export const useRemoveProductListFacade = () => {
  const [removeProducts, { error, loading }] = useRemoveProductsMutation({
    refetchQueries: ["GetProducts"],
  });

  const handleRemove = (
    ids: string[],
    options?: BaseCallbackOptions<RemoveProductsMutation>
  ) =>
    removeProducts({
      variables: {
        ids,
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });

  return { removeProductList: { onRemove: handleRemove, error, loading } };
};
