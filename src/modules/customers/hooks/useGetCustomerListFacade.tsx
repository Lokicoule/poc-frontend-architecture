import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { CustomerViewModel } from "../domain/customers.model";
import { CustomerMap } from "../mappers/customer.mapper";
import {
  GetCustomersQuery,
  useGetCustomersQuery,
} from "../operations/customers.generated";

export const useGetCustomerListFacade = (
  options?: BaseCallbackOptions<GetCustomersQuery>
) => {
  const { data, loading, error } = useGetCustomersQuery({
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetCustomersQuery | undefined) =>
    data?.getCustomers?.map((customer) =>
      customer ? CustomerMap.toViewModel(customer) : ({} as CustomerViewModel)
    ) ?? [];
  return { getCustomerList: { data: mapDtoToViewModel(data), loading, error } };
};
