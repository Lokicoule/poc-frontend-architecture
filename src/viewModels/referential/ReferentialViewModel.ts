import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../api/fdo/types/dto-types.generated";

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
