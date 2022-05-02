import {
  ParamReferentialViewModel,
  ParamReferentialViewModelProps,
} from "../../referential/domain/parameter-referential.model";
import { ParameterReferentialEnum } from "../dtos/products.dto.generated";

export interface ParamReferentialProductViewModelProps
  extends ParamReferentialViewModelProps<ParameterReferentialEnum> {}

export class ParamReferentialProductViewModel extends ParamReferentialViewModel<ParameterReferentialEnum> {
  public static create(
    props: ParamReferentialProductViewModelProps
  ): ParamReferentialProductViewModel {
    return new ParamReferentialProductViewModel(props);
  }
}
