import {
  ParamReferentialViewModel,
  ParamReferentialViewModelProps,
} from "../../referential/domain/parameter-referential.model";
import { ParameterReferentialEnum } from "../dtos/customers.dto.generated";

export interface ParamReferentialCustomerViewModelProps
  extends ParamReferentialViewModelProps<ParameterReferentialEnum> {}

export class ParamReferentialCustomerViewModel extends ParamReferentialViewModel<ParameterReferentialEnum> {
  public static create(
    props: ParamReferentialCustomerViewModelProps
  ): ParamReferentialCustomerViewModel {
    return new ParamReferentialCustomerViewModel(props);
  }
}
