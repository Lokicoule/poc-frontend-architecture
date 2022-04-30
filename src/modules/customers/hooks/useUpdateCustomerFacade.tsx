import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { CustomerViewModel } from "../domain/CustomerViewModel";
import { UpdateCustomerViewModel } from "../domain/UpdateCustomerViewModel";
import { updateCustomerMap } from "../mappers/updateCustomerMap";
import {
  UpdateCustomerMutation,
  useUpdateCustomerMutation,
} from "../operations/customers.generated";

export const useUpdateCustomerFacade = () => {
  const [updateCustomer, { error }] = useUpdateCustomerMutation({
    update(cache, { data: updatedCustomer }) {
      cache.modify({
        fields: {
          getCustomer(existingCustomer, { toReference }) {
            return updatedCustomer
              ? toReference(updatedCustomer)
              : existingCustomer;
          },
        },
      });
    },
  });

  const handleUpdate = (
    customerId: any,
    defaultCustomer: CustomerViewModel,
    updatedCustomer: UpdateCustomerViewModel,
    options?: BaseCallbackOptions<UpdateCustomerMutation>
  ) => {
    const customer = CustomerViewModel.create({
      id: customerId,
      ...updatedCustomer,
    });
    if (!customer.equals(defaultCustomer)) Promise.resolve();
    return updateCustomer({
      variables: {
        updateCustomerId: customerId,
        updateCustomerInput: updateCustomerMap.toDto(customer),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return { updateCustomer: handleUpdate, error };
};
