import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import {
  RemoveCustomersMutation,
  useRemoveCustomersMutation,
} from "../operations/customers.generated";

export const useRemoveCustomerListFacade = () => {
  const [removeCustomers, { error, loading }] = useRemoveCustomersMutation({
    refetchQueries: ["GetCustomers"],
  });

  const handleRemove = (
    ids: string[],
    options?: BaseCallbackOptions<RemoveCustomersMutation>
  ) =>
    removeCustomers({
      variables: {
        ids,
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });

  return { removeCustomerList: { onRemove: handleRemove, error, loading } };
};
