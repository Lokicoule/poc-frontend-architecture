import { ValueObject } from "../../../core/domain/ValueObject";
import { ParamReferentialViewModelProps } from "../../referential/domain/referential.type";
import { ParameterReferentialEnum } from "../dtos/customers.dto.generated";

export class ParamReferentialCustomerViewModel extends ValueObject<
  ParamReferentialViewModelProps<ParameterReferentialEnum>
> {
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
    props: ParamReferentialViewModelProps<ParameterReferentialEnum>
  ): ParamReferentialCustomerViewModel {
    return new ParamReferentialCustomerViewModel(props);
  }
}
