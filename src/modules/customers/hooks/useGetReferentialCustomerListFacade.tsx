import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialCustomerViewModel } from "../domain/referential-customer.model";
import { UseCaseReferentialEnum } from "../dtos/customers.dto.generated";
import { ReferentialCustomerMap } from "../mappers/referential-customer.mapper";
import {
  GetReferentialCustomersQuery,
  useGetReferentialCustomersQuery,
} from "../operations/referential-customers.generated";

export const useGetReferentialCustomerListFacade = (
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
        ? ReferentialCustomerMap.toViewModel(referentialCustomer)
        : ReferentialCustomerViewModel.create({
            id: "",
            useCase: UseCaseReferentialEnum.CodeGenerator,
            parameters: [],
          })
    ) ?? [];

  return {
    getReferentialCustomerList: {
      data: mapDtoToViewModel(data),
      loading,
      error,
    },
  };
};
