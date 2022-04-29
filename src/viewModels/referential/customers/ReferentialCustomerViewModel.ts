import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../../modules/customers/dtos/customers.dto.generated";

export interface ReferentialCustomersParamsViewModel {
  id: string;
  key: ParameterReferentialEnum;
  value: string;
}

export interface ReferentialCustomerViewModel {
  id: string;
  useCase: UseCaseReferentialEnum;
  parameters: ReferentialCustomersParamsViewModel[];
}
