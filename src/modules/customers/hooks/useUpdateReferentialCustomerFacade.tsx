import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialCustomerViewModel } from "../domain/referential-customer.model";
import { UpdateReferentialCustomerMap } from "../mappers/update-referential-customer.mapper";
import {
  UpdateReferentialCustomerMutation,
  useUpdateReferentialCustomerMutation,
} from "../operations/referential-customers.generated";

export const useUpdateReferentialCustomerFacade = () => {
  const [updateReferentialCustomer, { error, loading }] =
    useUpdateReferentialCustomerMutation({
      refetchQueries: ["GetReferentialCustomers"],
    });

  const handleUpdate = (
    updateReferentialCustomerId: string,
    data: ReferentialCustomerViewModel,
    options?: BaseCallbackOptions<UpdateReferentialCustomerMutation>
  ) => {
    return updateReferentialCustomer({
      variables: {
        updateReferentialCustomerId,
        updateReferentialCustomerInput:
          UpdateReferentialCustomerMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return {
    updateReferentialCustomer: { onUpdate: handleUpdate, error, loading },
  };
};
