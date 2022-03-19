import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../../api/types/types.generated";

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
