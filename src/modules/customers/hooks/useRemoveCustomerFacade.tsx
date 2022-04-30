import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import {
  RemoveCustomerMutation,
  useRemoveCustomerMutation,
} from "../operations/customers.generated";

export const useRemoveCustomerFacade = () => {
  const [removeCustomer] = useRemoveCustomerMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          getCustomers(existingCustomersRef, { readField }) {
            return existingCustomersRef.filter(
              (customerRef: any) =>
                data?.removeCustomer.id !== readField("id", customerRef)
            );
          },
        },
      });
    },
  });

  const handleRemove = (
    customerId: any,
    options?: BaseCallbackOptions<RemoveCustomerMutation>
  ) =>
    removeCustomer({
      variables: {
        removeCustomerId: customerId,
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });

  return { removeCustomer: handleRemove };
};
