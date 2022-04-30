import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import {
  RemoveCustomersMutation,
  useRemoveCustomersMutation,
} from "../operations/customers.generated";

export const useRemoveManyCustomersFacade = () => {
  const [removeCustomers] = useRemoveCustomersMutation({
    refetchQueries: ["GetCustomers"],
  });

  const handleRemoveMany = (
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

  return { removeManyCustomers: handleRemoveMany };
};
