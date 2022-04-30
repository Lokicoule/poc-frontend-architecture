import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { UpdateCustomerViewModel } from "../domain/customers.model";
import { UpdateCustomerMap } from "../mappers/update-customer.mapper";
import {
  UpdateCustomerMutation,
  useUpdateCustomerMutation,
} from "../operations/customers.generated";

export const useUpdateCustomerFacade = () => {
  const [updateCustomer, { error, loading }] = useUpdateCustomerMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          getCustomer(existingCustomer, { toReference }) {
            return data ? toReference(data) : existingCustomer;
          },
        },
      });
    },
  });

  const handleUpdate = (
    customerId: any,
    data: UpdateCustomerViewModel,
    options?: BaseCallbackOptions<UpdateCustomerMutation>
  ) => {
    return updateCustomer({
      variables: {
        updateCustomerId: customerId,
        updateCustomerInput: UpdateCustomerMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return { updateCustomer: { onUpdate: handleUpdate, error, loading } };
};
