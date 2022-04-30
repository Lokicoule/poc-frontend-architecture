import { ValueObject } from "../../../core/domain/ValueObject";
import { ParameterReferentialEnum } from "../dtos/customers.dto.generated";

export interface ParamReferentialCustomerViewModelProps {
  id: string;
  key: ParameterReferentialEnum;
  value: string;
}

export class ParamReferentialCustomerViewModel extends ValueObject<ParamReferentialCustomerViewModelProps> {
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
    props: ParamReferentialCustomerViewModelProps
  ): ParamReferentialCustomerViewModel {
    return new ParamReferentialCustomerViewModel(props);
  }
}
