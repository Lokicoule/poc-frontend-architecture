import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialCustomerViewModel } from "../domain/ReferentialCustomerViewModel";
import { UseCaseReferentialEnum } from "../dtos/customers.dto.generated";
import { referentialCustomerMap } from "../mappers/referentialCustomerMap";
import {
  GetReferentialCustomersQuery,
  useGetReferentialCustomersQuery,
} from "../operations/referentialCustomers.generated";

export const useGetReferentialCustomersFacade = (
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
  return { referentialCustomerList: mapDtoToViewModel(data), loading, error };
};
