import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { CustomerViewModel } from "../domain/CustomerViewModel";
import { customerMap } from "../mappers/customer.mapper";
import {
  GetCustomerQuery,
  useGetCustomerQuery,
} from "../operations/customers.generated";

export const useGetCustomerFacade = (
  customerId: any,
  options?: BaseCallbackOptions<GetCustomerQuery>
) => {
  const { data, loading, error } = useGetCustomerQuery({
    variables: {
      getCustomerId: customerId,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetCustomerQuery | undefined) =>
    data?.getCustomer
      ? customerMap.toViewModel(data?.getCustomer)
      : CustomerViewModel.create({
          id: "",
          code: "",
          naming: "",
          address: "",
          city: "",
          zipCode: "",
        });

  return { customer: mapDtoToViewModel(data), loading, error };
};
