import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { CreateCustomerViewModelProps } from "../domain/customers.model";
import { CreateCustomerMap } from "../mappers/create-customer.mapper";
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
    data: CreateCustomerViewModelProps,
    options?: BaseCallbackOptions<CreateCustomerMutation>
  ) => {
    return createCustomer({
      variables: {
        createCustomerInput: CreateCustomerMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return { createCustomer: { onCreate: handleCreate, error, loading } };
};
