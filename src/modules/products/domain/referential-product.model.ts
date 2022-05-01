import { ValueObject } from "../../../core/domain/ValueObject";
import { ReferentialViewModelProps } from "../../referential/domain/referential.type";
import { UseCaseReferentialEnum } from "../dtos/products.dto.generated";
import { ParamReferentialProductViewModel } from "./parameter-referential.model";

export class ReferentialProductViewModel extends ValueObject<
  ReferentialViewModelProps<
    UseCaseReferentialEnum,
    ParamReferentialProductViewModel
  >
> {
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
    props: ReferentialViewModelProps<
      UseCaseReferentialEnum,
      ParamReferentialProductViewModel
    >
  ): ReferentialProductViewModel {
    return new ReferentialProductViewModel(props);
  }
}
