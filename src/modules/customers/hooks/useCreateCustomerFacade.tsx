import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { CreateCustomerViewModel } from "../domain/customers.model";
import { createCustomerMap } from "../mappers/create-customer.mapper";
import {
  CreateCustomerMutation,
  useCreateCustomerMutation,
} from "../operations/customers.generated";

export const useCreateCustomerFacade = () => {
  const [createCustomer, { error, loading }] = useCreateCustomerMutation({
    update(cache, { data: addedCustomer }) {
      cache.modify({
        fields: {
          getCustomer(existingCustomer, { toReference }) {
            return addedCustomer
              ? toReference(addedCustomer)
              : existingCustomer;
          },
          getCustomers: (existingItems = [], { toReference }) => {
            return (
              (addedCustomer?.createCustomer && [
                ...existingItems,
                toReference(addedCustomer.createCustomer),
              ]) ||
              existingItems
            );
          },
        },
      });
    },
  });

  const handleCreate = (
    data: CreateCustomerViewModel,
    options?: BaseCallbackOptions<CreateCustomerMutation>
  ) => {
    return createCustomer({
      variables: {
        createCustomerInput: createCustomerMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return { createCustomer: handleCreate, error, loading };
};
