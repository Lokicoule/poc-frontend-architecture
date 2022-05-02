import {
  ParamReferentialViewModel,
  ParamReferentialViewModelProps,
} from "../../referential/domain/parameter-referential.model";
import { ParameterReferentialEnum } from "../dtos/orders.dto.generated";

export interface ParamReferentialOrderViewModelProps
  extends ParamReferentialViewModelProps<ParameterReferentialEnum> {}

export class ParamReferentialOrderViewModel extends ParamReferentialViewModel<ParameterReferentialEnum> {
  public static create(
    props: ParamReferentialOrderViewModelProps
  ): ParamReferentialOrderViewModel {
    return new ParamReferentialOrderViewModel(props);
  }
}
