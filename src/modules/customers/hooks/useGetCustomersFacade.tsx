import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { CustomerViewModel } from "../domain/CustomerViewModel";
import { customerMap } from "../mappers/customer.mapper";
import {
  GetCustomersQuery,
  useGetCustomersQuery,
} from "../operations/customers.generated";

export const useGetCustomersFacade = (
  options?: BaseCallbackOptions<GetCustomersQuery>
) => {
  const { data, loading, error } = useGetCustomersQuery({
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetCustomersQuery | undefined) =>
    data?.getCustomers?.map((customer) =>
      customer
        ? customerMap.toViewModel(customer)
        : CustomerViewModel.create({
            id: "",
            code: "",
            naming: "",
            address: "",
            city: "",
            zipCode: "",
          })
    ) ?? [];
  return { customers: mapDtoToViewModel(data), loading, error };
};
