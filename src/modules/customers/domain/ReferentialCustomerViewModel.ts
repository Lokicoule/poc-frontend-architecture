import { ValueObject } from "../../../core/domain/ValueObject";
import { UseCaseReferentialEnum } from "../../../modules/customers/dtos/customers.dto.generated";
import { ParamReferentialCustomerViewModel } from "./ParamReferentialCustomerViewModel";

export interface ReferentialCustomerViewModelProps {
  id: string;
  useCase: UseCaseReferentialEnum;
  parameters: ParamReferentialCustomerViewModel[];
}

export class ReferentialCustomerViewModel extends ValueObject<ReferentialCustomerViewModelProps> {
  get id() {
    return this.props.id;
  }

  get useCase() {
    return this.props.useCase;
  }

  get parameters() {
    return this.props.parameters;
  }

  public static create(
    props: ReferentialCustomerViewModelProps
  ): ReferentialCustomerViewModel {
    return new ReferentialCustomerViewModel(props);
  }
}
