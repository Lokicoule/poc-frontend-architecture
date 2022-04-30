import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialCustomerViewModel } from "../domain/referential-customer.model";
import { UseCaseReferentialEnum } from "../dtos/customers.dto.generated";
import { referentialCustomerMap } from "../mappers/referential-customer.mapper";
import {
  GetReferentialCustomersQuery,
  useGetReferentialCustomersQuery,
} from "../operations/referential-customers.generated";

export const useGetAllReferentialCustomerFacade = (
  options?: BaseCallbackOptions<GetReferentialCustomersQuery>
) => {
  const { data, loading, error } = useGetReferentialCustomersQuery({
    variables: {
      populate: true,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetReferentialCustomersQuery | undefined) =>
    data?.getReferentialCustomers?.map((referentialCustomer) =>
      referentialCustomer
        ? referentialCustomerMap.toViewModel(referentialCustomer)
        : ReferentialCustomerViewModel.create({
            id: "",
            useCase: UseCaseReferentialEnum.CodeGenerator,
            parameters: [],
          })
    ) ?? [];

  return {
    getAllReferentialCustomer: {
      data: mapDtoToViewModel(data),
      loading,
      error,
    },
  };
};
