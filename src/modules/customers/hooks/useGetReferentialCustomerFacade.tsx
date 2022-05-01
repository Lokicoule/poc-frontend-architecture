import { BaseCallbackOptions } from "../../../core/types/BaseCallbackOptions";
import { ReferentialCustomerViewModel } from "../domain/referential-customer.model";
import { ReferentialCustomerMap } from "../mappers/referential-customer.mapper";
import {
  GetReferentialCustomerQuery,
  UseCaseReferentialEnum,
  useGetReferentialCustomerQuery,
} from "../operations/referential-customers.generated";

export const useGetReferentialCustomerFacade = (
  referentialCustomerId: any,
  options?: BaseCallbackOptions<GetReferentialCustomerQuery>
) => {
  const { data, loading, error } = useGetReferentialCustomerQuery({
    variables: {
      getReferentialCustomerId: referentialCustomerId,
      populate: true,
    },
    onCompleted: options?.onCompleted,
    onError: options?.onError,
  });

  const mapDtoToViewModel = (data: GetReferentialCustomerQuery | undefined) =>
    data?.getReferentialCustomer
      ? ReferentialCustomerMap.toViewModel(data?.getReferentialCustomer)
      : ReferentialCustomerViewModel.create({
          id: "",
          useCase: UseCaseReferentialEnum.CodeGenerator,
          parameters: [],
        });

  return {
    getReferentialCustomer: { data: mapDtoToViewModel(data), loading, error },
  };
};