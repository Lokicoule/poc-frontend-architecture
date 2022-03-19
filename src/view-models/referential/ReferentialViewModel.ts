import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../api/types/types.generated";

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
