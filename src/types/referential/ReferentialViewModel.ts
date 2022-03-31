import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../dto-types.generated";

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
