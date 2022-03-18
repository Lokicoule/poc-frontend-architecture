import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../../api/types/types.generated";
import { DataProps } from "../../../components/Tables/data.props";

export interface ReferentialCustomersParamsViewModel extends DataProps {
  key: ParameterReferentialEnum;
  value: string;
}

export interface ReferentialCustomerViewModel {
  id: string;
  useCase: UseCaseReferentialEnum;
  parameters: ReferentialCustomersParamsViewModel[];
}
