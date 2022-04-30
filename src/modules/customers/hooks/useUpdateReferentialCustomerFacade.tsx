import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialCustomerViewModel } from "../domain/referential-customer.model";
import { referentialCustomerMap } from "../mappers/referential-customer.mapper";
import {
  UpdateReferentialCustomerMutation,
  useUpdateReferentialCustomerMutation,
} from "../operations/referentialCustomers.generated";

export const useUpdateReferentialCustomerFacade = () => {
  const [updateReferentialCustomer, { error, loading }] =
    useUpdateReferentialCustomerMutation({
      refetchQueries: ["GetReferentialCustomers"],
    });

  const handleUpdate = (
    referentialCustomerId: any,
    data: ReferentialCustomerViewModel,
    options?: BaseCallbackOptions<UpdateReferentialCustomerMutation>
  ) => {
    return updateReferentialCustomer({
      variables: {
        updateReferentialCustomerId: referentialCustomerId,
        updateReferentialCustomerInput: referentialCustomerMap.toDto(data),
      },
      onCompleted: options?.onCompleted,
      onError: options?.onError,
    });
  };

  return {
    updateReferentialCustomer: { onUpdate: handleUpdate, error, loading },
  };
};
