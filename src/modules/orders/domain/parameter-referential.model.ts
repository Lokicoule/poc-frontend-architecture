import { ValueObject } from "../../../core/domain/ValueObject";
import { ParamReferentialViewModelProps } from "../../referential/domain/referential.type";
import { ParameterReferentialEnum } from "../dtos/orders.dto.generated";

export interface ParamReferentialOrderViewModelProps
  extends ParamReferentialViewModelProps<ParameterReferentialEnum> {}

export class ParamReferentialOrderViewModel extends ValueObject<ParamReferentialOrderViewModelProps> {
  get id() {
    return this.props.id;
  }

  get key() {
    return this.props.key;
  }

  get value() {
    return this.props.value;
  }

  public static create(
    props: ParamReferentialOrderViewModelProps
  ): ParamReferentialOrderViewModel {
    return new ParamReferentialOrderViewModel(props);
  }
}
