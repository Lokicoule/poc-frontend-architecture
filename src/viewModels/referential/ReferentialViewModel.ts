import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../modules/customers/dtos/customers.dto.generated";

export interface ReferentialParamsViewModel {
  id: string;
  key: ParameterReferentialEnum;
  value: string;
}

export interface ReferentialViewModel {
  id: string;
  useCase: UseCaseReferentialEnum;
  parameters: ReferentialParamsViewModel[];
}
